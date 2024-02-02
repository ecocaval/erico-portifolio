import Image from "next/image";
import BigLayoutDot from "./big-layout-dot";
import { stackType } from "@/app/utils/stacks-list";

export type stackButtonPropsType = {
  stack: string;
  iconSourcePath: string;
  iconWidth: number;
  iconHeight: number;
  iconAltText: string;
  selectedStack: stackType;
};

export default function StackButton({
  stack,
  iconSourcePath,
  iconWidth,
  iconHeight,
  iconAltText,
  selectedStack,
}: stackButtonPropsType) {
  return (
    <>
      <div className="group mb-10 flex relative cursor-pointer">
        <BigLayoutDot size="8" additionalCss="mt-4 mr-4" />
        <div>
          <Image
            src={`${iconSourcePath}`}
            alt={`${iconAltText}`}
            width={iconWidth * 1.5}
            height={iconHeight * 1.5}
          />
          <p className="text-center text-white text-2xl mt-4">{stack}</p>
        </div>
        <div
          className={`absolute w-full top-6 left-32 transition-opacity duration-300 ${
            selectedStack.stack === stack ? "opacity-80" : "opacity-10"
          }`}
        >
          <Image src="/arrow.svg" alt="Arrow icon" width={70} height={300} />
        </div>
      </div>
    </>
  );
}
