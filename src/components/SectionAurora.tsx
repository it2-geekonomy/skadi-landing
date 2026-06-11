type SectionAuroraProps = {
  primaryTop?: string;
  secondaryTop?: string;
};

export default function SectionAurora({
  primaryTop = "46%",
  secondaryTop = "52%",
}: SectionAuroraProps) {
  const auroraBlur = "blur(170.4px)";

  const blobStyle = {
    background: "#6E964F",
    borderRadius: "1589px",
    filter: auroraBlur,
    WebkitFilter: auroraBlur,
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 h-[380px] w-[min(920px,76vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.55]"
        style={{ ...blobStyle, top: primaryTop }}
      />
      <div
        className="absolute left-1/2 h-[320px] w-[min(1100px,82vw)] -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{ ...blobStyle, top: secondaryTop }}
      />
    </div>
  );
}
