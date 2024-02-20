"use client";

import { ButtonWithIcon } from "@/components/button-with-icon";
import {
  ABOUT,
  ACADEMIC,
  CONTACT,
  DOWNLOAD,
  HOME,
  PROFESSIONAL,
  RECOMENDATION,
  headerButtonsList,
} from "../app/utils/header-buttons-list";
import { ReferenceToScrollContext } from "@/contexts/referenceToScrollContext";
import { useContext } from "react";
import Image from "next/image";
import { LANGUAGES, LanguageContext } from "@/contexts/languageContext";

export default function Header() {
  const {
    stackInfoReference,
    academicInfoReference,
    professionalInfoReference,
    recomendationlInfoReference,
  } = useContext(ReferenceToScrollContext);

  const { language, setLanguage } = useContext(LanguageContext);

  const SCROLLING_PROPERTIES: ScrollIntoViewOptions = {
    behavior: "smooth",
    block: "start",
  };

  function handleScrollByReference(ref: string) {
    switch (ref) {
      case ABOUT:
        stackInfoReference.current?.scrollIntoView(SCROLLING_PROPERTIES);
        break;
      case PROFESSIONAL:
        professionalInfoReference.current?.scrollIntoView(SCROLLING_PROPERTIES);
        break;
      case ACADEMIC:
        academicInfoReference.current?.scrollIntoView(SCROLLING_PROPERTIES);
        break;
      case RECOMENDATION:
        recomendationlInfoReference.current?.scrollIntoView(
          SCROLLING_PROPERTIES
        );
        break;
      default:
        break;
    }
  }

  return (
    <>
      <header className="px-12 h-20 flex justify-start items-center my-2 mt-3 relative">
        <div className="flex justify-center items-center">
          {headerButtonsList.map((item) => (
            <div
              key={Math.random()}
              onClick={() => handleScrollByReference(item.ref)}
            >
              {item.ref == DOWNLOAD ? (
                <a href={language == LANGUAGES.PTBR ? "/curriculum.pdf" : "/curriculum-english.pdf"} download>
                  <ButtonWithIcon
                    iconSourcePath={item.iconSourcePath}
                    darkIconSourcePath={item.darkIconSourcePath}
                    iconAltText={item.iconAltText}
                    iconWidth={item.iconWidth}
                    iconHeight={item.iconHeight}
                    buttonText={
                      language == LANGUAGES.PTBR
                        ? item.buttonText
                        : item.buttonTextEnglish
                    }
                    buttonAdditionalCss={item.buttonAdditionalCss}
                    iconAdditionalCss={item.iconAdditionalCss}
                    textAdditionalCss={item.textAdditionalCss}
                  />
                </a>
              ) : (
                <ButtonWithIcon
                  iconSourcePath={item.iconSourcePath}
                  darkIconSourcePath={item.darkIconSourcePath}
                  iconAltText={item.iconAltText}
                  iconWidth={item.iconWidth}
                  iconHeight={item.iconHeight}
                  buttonText={
                    language == LANGUAGES.PTBR
                      ? item.buttonText
                      : item.buttonTextEnglish
                  }
                  buttonAdditionalCss={item.buttonAdditionalCss}
                  iconAdditionalCss={item.iconAdditionalCss}
                  textAdditionalCss={item.textAdditionalCss}
                />
              )}
            </div>
          ))}
          <div className="flex absolute right-28">
            <Image
              className={`ml-8 cursor-pointer transition-all duration-200 ${
                language == LANGUAGES.PTBR ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => setLanguage(LANGUAGES.PTBR)}
              src="/br.svg"
              alt="brazil icon"
              width={20}
              height={20}
              priority
            />
            <Image
              className={`ml-4 cursor-pointer transition-all duration-200 ${
                language == LANGUAGES.EN ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => setLanguage(LANGUAGES.EN)}
              src="/us.svg"
              alt="united states icon"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </header>
    </>
  );
}
