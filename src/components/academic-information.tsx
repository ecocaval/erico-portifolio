import Image from "next/image";
import SmallLayoutDot from "./small-layout-dot";
import BigLayoutDot from "./big-layout-dot";
import { EDUCATIONAL_LIST } from "@/app/utils/educational-list";

export default function AcademicInformation() {
  return (
    <div className="w-auto ml-20">
      <h2 className="text-white text-4xl">Formação Acadêmica:</h2>
      <div className="mt-8 flex flex-col gap-4">
        {EDUCATIONAL_LIST.map((item, listIndex) => (
          <div
            key={Math.random()}
            className="group flex gap-4 items-start cursor-pointer"
          >
            <div className="mt-2 flex flex-col gap-2 items-center">
              <BigLayoutDot />
              {listIndex !== EDUCATIONAL_LIST.length - 1 &&
                new Array(5).fill(null).map((_, dotsIndex) => (
                  <div
                    key={Math.random()}
                    className="opacity-50 group-hover:opacity-100 transition-all duration-300"
                  >
                    <SmallLayoutDot
                      additionalCss={
                        "shadow-white group-hover:shadow-2xl " +
                        (dotsIndex === 0 ? "mt-2" : "")
                      }
                    />
                  </div>
                ))}
            </div>
            <Image
              className="group-hover:ml-4 transition-margin duration-300"
              src="/high-school.svg"
              alt="high school logo"
              width={34}
              height={28}
            />
            <div>
              <p className="text-lg text-white opacity-80">
                {item.institution}
              </p>
              <div className="text-lg flex items-center h-[24px] mt-2">
                <p className="text-lg text-white mr-6">{item.course}</p>
                <p className="text-lg text-white">{item.period.from}</p>
                <p className="text-4xl text-white mx-2 mb-2">{"→"}</p>
                <p className="text-white">{item.period.to}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
