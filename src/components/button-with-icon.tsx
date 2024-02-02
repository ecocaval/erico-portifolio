import Image from "next/image";

export type buttonWithIconPropsType = {
  iconSourcePath: string;
  darkIconSourcePath?: string;
  buttonText: string;
  iconWidth: number;
  iconHeight: number;
  iconAltText: string;
  buttonAdditionalCss?: string;
  iconAdditionalCss?: string;
  textAdditionalCss?: string;
  href?: string;
};

export function ButtonWithIcon({
  iconSourcePath,
  darkIconSourcePath,
  buttonText,
  iconWidth,
  iconHeight,
  iconAltText,
  buttonAdditionalCss,
  iconAdditionalCss,
  textAdditionalCss,
  href
}: buttonWithIconPropsType) {

  return (
    <>
      <a
        href={href}
        target="_blank"
        className={`group flex gap-4 items-center p-3 mx-3 rounded-xl cursor-pointer ${buttonAdditionalCss}`}
      >
        <div className={`flex items-center relative w-[20px] h-[20px]`}>
          <Image
            className={`pb-0.5 absolute z-30 group-hover:opacity-0 ${iconAdditionalCss}`}
            src={iconSourcePath}
            alt={iconAltText}
            width={iconWidth}
            height={iconHeight}
            priority
          />
          {darkIconSourcePath && (
            // Since we can not change thw svg color itself easily using the Image tag from next, i chose to
            // have one dark icon behind the light one so that i can fake the transitions when hovering the button
            <Image
              className={`pb-0.5 absolute z-20 ${iconAdditionalCss}`}
              src={darkIconSourcePath}
              alt={iconAltText}
              width={iconWidth}
              height={iconHeight}
              priority
            />
          )}
        </div>
        <p
          className={`text-lg text-white group-hover:text-[#130526] align-middle ${textAdditionalCss}`}
        >
          {buttonText}
        </p>
      </a>
    </>
  );
}
