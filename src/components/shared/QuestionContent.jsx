import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import MermaidDiagram from './MermaidDiagram';

const CHART_COLORS = ['#0f766e', '#2563eb', '#b45309', '#7c3aed'];
const PLACEHOLDER_PATTERN = /(\{\{(?:image|chart|table|diagram)\}\})/g;

function QuestionImage({ image }) {
  if (!image?.src) return null;

  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
      <img
        src={image.src}
        alt={image.alt || 'Question reference'}
        className="mx-auto max-h-[28rem] w-full object-contain"
      />
    </figure>
  );
}

function QuestionChart({ chart }) {
  if (!chart?.series?.length) return null;

  const labels = chart.xAxis || chart.categories || [];
  const data = labels.map((label, index) => Object.fromEntries([
    ['label', label],
    ...chart.series.map((series) => [series.name, series.data?.[index] ?? null]),
  ]));
  const Chart = chart.type === 'bar' ? BarChart : LineChart;

  return (
    <figure
      className="my-5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 sm:px-5"
      role="img"
      aria-label={chart.title || 'Question chart'}
    >
      {chart.title ? (
        <figcaption className="mb-4 text-center text-sm font-semibold text-slate-800">
          {chart.title}
        </figcaption>
      ) : null}
      <div className="h-64 w-full sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <Chart data={data} margin={{ top: 8, right: 12, left: -12, bottom: 4 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: '#64748b', fontSize: 12 }} tickLine={false} axisLine={{ stroke: '#cbd5e1' }} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderColor: '#cbd5e1', borderRadius: 8, fontSize: 12 }} />
            {chart.series.length > 1 ? <Legend wrapperStyle={{ fontSize: 12 }} /> : null}
            {chart.series.map((series, index) => (
              chart.type === 'bar' ? (
                <Bar key={series.name} dataKey={series.name} fill={CHART_COLORS[index % CHART_COLORS.length]} radius={[4, 4, 0, 0]} />
              ) : (
                <Line
                  key={series.name}
                  type="monotone"
                  dataKey={series.name}
                  stroke={CHART_COLORS[index % CHART_COLORS.length]}
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: CHART_COLORS[index % CHART_COLORS.length] }}
                  activeDot={{ r: 5 }}
                />
              )
            ))}
          </Chart>
        </ResponsiveContainer>
      </div>
    </figure>
  );
}

function QuestionTable({ table }) {
  if (!table?.headers?.length || !table?.rows?.length) return null;

  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-800">
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const renderVisual = (type, question) => {
  if (type === 'image') return <QuestionImage image={question.image} />;
  if (type === 'chart') return <QuestionChart chart={question.chart} />;
  if (type === 'table') return <QuestionTable table={question.table} />;
  if (type === 'diagram' && question.diagram) return <MermaidDiagram chart={question.diagram} />;
  return null;
};

export default function QuestionContent({ question }) {
  const prompt = question?.prompt || '';
  const parts = prompt.split(PLACEHOLDER_PATTERN);
  const referencedTypes = new Set();

  return (
    <div className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
      {parts.map((part, index) => {
        const match = part.match(/^\{\{(image|chart|table|diagram)\}\}$/);
        if (match) {
          referencedTypes.add(match[1]);
          return <div key={`${match[1]}-${index}`}>{renderVisual(match[1], question)}</div>;
        }
        const text = part.trim();
        return text ? <p key={`text-${index}`} className="whitespace-pre-wrap">{text}</p> : null;
      })}

      {!referencedTypes.has('image') && question.image ? <QuestionImage image={question.image} /> : null}
      {!referencedTypes.has('chart') && question.chart ? <QuestionChart chart={question.chart} /> : null}
      {!referencedTypes.has('table') && question.table ? <QuestionTable table={question.table} /> : null}
      {!referencedTypes.has('diagram') && question.diagram ? <MermaidDiagram chart={question.diagram} /> : null}
    </div>
  );
}
