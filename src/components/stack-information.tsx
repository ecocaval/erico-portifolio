import { STACKS_LIST } from "@/app/utils/stacks-list";
import { ButtonWithIcon } from "./button-with-icon";
import StackButton from "./stack-button";
import { useContext, useState } from "react";
import { ReferenceToScrollContext } from "@/contexts/referenceToScrollContext";
import { LANGUAGES, LanguageContext } from "@/contexts/languageContext";

export default function StackInformation() {
  const [selectedStack, setSelectedStack] = useState(STACKS_LIST[0]);
  const [previousSelectedStack, setPreviousSelectedStack] = useState(
    STACKS_LIST[0]
  );

  const { stackInfoReference } = useContext(ReferenceToScrollContext);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="w-1/2" ref={stackInfoReference}>
        <h2 className="text-white text-4xl">
          {language == LANGUAGES.PTBR ? "Stack Utilizada:" : "Stack Used:"}
        </h2>
        <div className="flex mt-8">
          <div className="">
            {STACKS_LIST.map((item) => (
              <div
                key={Math.random()}
                onMouseMove={() => {
                  if (selectedStack === previousSelectedStack) {
                    setSelectedStack(item);
                    setTimeout(() => setPreviousSelectedStack(item), 700);
                  }
                }}
              >
                <StackButton
                  iconSourcePath={item.iconSourcePath}
                  iconAltText={item.iconAltText}
                  iconWidth={item.iconWidth}
                  iconHeight={item.iconHeight}
                  stack={item.stack}
                  selectedStack={selectedStack}
                />
              </div>
            ))}
          </div>
          <div
            className={`rounded-2xl bg-[#ffffff12] w-full min-w-80 h-auto 
            mb-10 ml-20 p-4 mr-10`}
          >
            <div
              className={`flex flex-col gap-2 ${
                previousSelectedStack !== selectedStack ? "animate-fadein" : ""
              }`}
            >
              {selectedStack.technologies.map((item) => (
                <ButtonWithIcon
                  key={Math.random()}
                  iconSourcePath={item.iconSourcePath}
                  iconAltText={item.iconAltText}
                  iconWidth={item.iconWidth}
                  iconHeight={item.iconHeight}
                  buttonText={item.buttonText}
                  buttonAdditionalCss={
                    "hover:pl-8 duration-300 ease " + item.buttonAdditionalCss
                  }
                  iconAdditionalCss={
                    "group-hover:opacity-100 " + item.iconAdditionalCss
                  }
                  textAdditionalCss={
                    "group-hover:text-white " + item.textAdditionalCss
                  }
                ></ButtonWithIcon>
              ))}
              <p className="px-4 text-white text-lg">
                {language == LANGUAGES.PTBR
                  ? selectedStack.descriptionPTBR
                  : selectedStack.descriptionEN}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
