import { useMemo } from 'react';
import DashboardShell from '../components/DashboardShell';
import { getUsageLogs, getUsageSummary } from '../services/usageLedger';
import { useCertifiStore } from '../store/useCertifiStore';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { Loader2 } from 'lucide-react';
import { 
  CircleDollarSign, 
  FileText, 
  Gauge, 
  ReceiptText, 
  Activity, 
  Database, 
  CheckCircle2, 
  XCircle,
  Cpu
} from 'lucide-react';

function formatUsd(amount) {
  return `$${amount.toFixed(4)}`;
}

function formatDateTime(value) {
  return new Date(value).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function UsageBilling() {
  const { isSignedIn } = useClerkAuth();
  const isSynced = useCertifiStore((state) => state.isSynced);

  const logs = getUsageLogs();
  const summary = getUsageSummary();

  const successfulActions = useMemo(
    () => logs.filter((log) => log.status === 'completed').length,
    [logs]
  );

  if (isSignedIn && !isSynced) {
    return (
      <DashboardShell
        title="Usage & Billing Ledger"
        subtitle="Track Career Points, overall billing, and every action across learning paths."
        activeTab="usage-billing"
        contentClassName="bg-[#f4fafa] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="text-sm font-medium text-slate-500 font-sans">Syncing usage ledger...</p>
        </div>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell
      title="Usage & Billing Ledger"
      subtitle="Track Career Points, overall billing, and every action across learning paths."
      activeTab="usage-billing"
      contentClassName="bg-[#f4fafa] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl space-y-8 py-8">
        
        {/* Top Level Summary Cards */}
        <section>
          <div className="mb-5">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">Platform Metrics</h2>
            <p className="text-sm text-slate-500">
              Career Points represent Groq compute usage. Billing is estimated from recorded activity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Points Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/75 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md">
              <div className="absolute -right-4 -top-4 rounded-full bg-teal-50/50 p-8 transition-transform group-hover:scale-110">
                <Gauge className="h-8 w-8 text-teal-100" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-50 text-teal-600 ring-1 ring-teal-200/50">
                    <Gauge className="h-3.5 w-3.5" />
                  </div>
                  Career Points Used
                </div>
                <div className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                  {summary.totalCareerPoints.toLocaleString()}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">Total Groq-backed compute consumed</p>
              </div>
            </div>

            {/* Cost Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/75 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
               <div className="absolute -right-4 -top-4 rounded-full bg-blue-50/50 p-8 transition-transform group-hover:scale-110">
                <CircleDollarSign className="h-8 w-8 text-blue-100" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-blue-600 ring-1 ring-blue-200/50">
                    <CircleDollarSign className="h-3.5 w-3.5" />
                  </div>
                  Estimated Cost
                </div>
                <div className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                  {formatUsd(summary.totalCostUsd)}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">Aggregate bill across all transactions</p>
              </div>
            </div>

            {/* Actions Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/75 bg-white p-6 shadow-sm transition-all hover:border-amber-200 hover:shadow-md">
               <div className="absolute -right-4 -top-4 rounded-full bg-amber-50/50 p-8 transition-transform group-hover:scale-110">
                <Activity className="h-8 w-8 text-amber-100" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-50 text-amber-600 ring-1 ring-amber-200/50">
                    <FileText className="h-3.5 w-3.5" />
                  </div>
                  Logged Actions
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tight text-slate-900">{logs.length}</span>
                  <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{successfulActions} Success</span>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-500">Total operations tracked in ledger</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction History Table */}
        <section className="rounded-2xl border border-slate-200/75 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900">Transaction History</h3>
              <p className="text-sm text-slate-500 mt-0.5">
                A detailed chronological ledger of Career Points utilization.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 shadow-sm">
              <ReceiptText className="h-4 w-4 text-slate-400" />
              System Logs
            </div>
          </div>

          {logs.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-slate-50/50 px-6 py-20 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/50">
                <Database className="h-8 w-8 text-slate-300" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">No operations logged</h4>
              <p className="mt-2 max-w-md text-sm text-slate-500">
                Generate an assessment or a learning path, and the corresponding Career Points usage and billing entry will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80">
                    <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">Action & Date</th>
                    <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">Area</th>
                    <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">Compute Used</th>
                    <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">Billed Cost</th>
                    <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {logs.map((log) => (
                    <tr key={log.id} className="transition-colors hover:bg-slate-50/50 group">
                      <td className="px-6 py-4 align-top">
                        <div className="font-semibold text-slate-900">{log.action}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{formatDateTime(log.createdAt)}</div>
                        
                        {/* Nested Metadata Row */}
                        {log.metadata && (
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-colors">
                            {log.metadata.model && (
                              <span className="flex items-center gap-1.5">
                                <Cpu className="h-3 w-3 text-slate-400" />
                                <span className="font-semibold text-slate-700">Model:</span> CareerSense-70b
                              </span>
                            )}
                            {typeof log.metadata.questionCount === 'number' && (
                              <span className="flex items-center gap-1.5">
                                <span className="font-semibold text-slate-700">Questions:</span> {log.metadata.questionCount}
                              </span>
                            )}
                            {typeof log.metadata.moduleCount === 'number' && (
                              <span className="flex items-center gap-1.5">
                                <span className="font-semibold text-slate-700">Modules:</span> {log.metadata.moduleCount}
                              </span>
                            )}
                            {typeof log.metadata.score === 'number' && (
                              <span className="flex items-center gap-1.5">
                                <span className="font-semibold text-slate-700">Score:</span> {log.metadata.score}%
                              </span>
                            )}
                            {log.metadata.error && (
                              <span className="flex items-center gap-1.5 text-red-600">
                                <span className="font-semibold">Error:</span> {log.metadata.error}
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                          {log.area || 'General'}
                        </span>
                      </td>
                      <td className="px-6 py-4 align-top font-semibold text-slate-900">
                        {log.careerPoints.toLocaleString()} <span className="text-xs font-normal text-slate-400 ml-0.5">CPs</span>
                      </td>
                      <td className="px-6 py-4 align-top font-semibold text-slate-900">
                        {formatUsd(log.costUsd || 0)}
                      </td>
                      <td className="px-6 py-4 align-top">
                        {log.status === 'completed' ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200/50">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700 ring-1 ring-red-200/50">
                            <XCircle className="h-3.5 w-3.5" />
                            {log.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </DashboardShell>
  );
}
