export default function BigLayoutDot({
  // size,
  additionalCss,
}: {
  // size: string;
  additionalCss?: string;
}) {
  return (
    <>
      <div
        className={`bg-white rounded-full w-[10px] h-[10px] ${additionalCss}`}
      />
    </>
  );
}
