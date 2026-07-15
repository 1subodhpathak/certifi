import { buildLinkedInShareText } from './shareLinks';
import { downloadBadgeFile, saveBadgeForCertificate } from './badgeRegistry';
import { downloadCertificateScoreReportPdf, previewCertificateScoreReportPdf } from './reportPdf';

export async function downloadBadgeSvg(certificate) {
  const badge = await saveBadgeForCertificate(certificate);
  downloadBadgeFile(badge, `${certificate.id}-badge.svg`);
}

export async function downloadScoreReport(certificate, attempt) {
  await downloadCertificateScoreReportPdf({
    certificate,
    attempt,
    linkedinSummary: buildLinkedInShareText(certificate),
    filename: `${certificate.id}-score-report.pdf`,
  });
}

export async function previewScoreReport(certificate, attempt) {
  await previewCertificateScoreReportPdf({
    certificate,
    attempt,
    linkedinSummary: buildLinkedInShareText(certificate),
  });
}
