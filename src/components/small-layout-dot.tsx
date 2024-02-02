export default function SmallLayoutDot({
  // size,
  additionalCss,
}: {
  // size: string;
  additionalCss?: string;
}) {
  return (
    <>
      <div
        className={`bg-white rounded-full w-[5px] h-[5px] ${additionalCss}`}
      />
    </>
  );
}
