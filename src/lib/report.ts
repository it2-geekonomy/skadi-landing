export const REPORT_PDF_FILENAME = "True Cost Missed Call LeadMagnet.pdf";

export const REPORT_PDF_URL = `/images/${encodeURIComponent(REPORT_PDF_FILENAME)}`;

export const REPORT_SOURCE = "Skadi Industry Report";

export const CALL_VOLUME_OPTIONS = [
  { value: "less_than_500", label: "Less than 500 calls" },
  { value: "500_2000", label: "500–2,000 calls" },
  { value: "2001_10000", label: "2,001–10,000 calls" },
  { value: "more_than_10000", label: "More than 10,000 calls" },
] as const;

export type CallVolumeValue = (typeof CALL_VOLUME_OPTIONS)[number]["value"];

const CALL_VOLUME_LABELS = Object.fromEntries(
  CALL_VOLUME_OPTIONS.map((option) => [option.value, option.label]),
) as Record<CallVolumeValue, string>;

export function getCallVolumeLabel(value: string): string | null {
  return CALL_VOLUME_LABELS[value as CallVolumeValue] ?? null;
}

export function isValidCallVolume(value: string): value is CallVolumeValue {
  return value in CALL_VOLUME_LABELS;
}
