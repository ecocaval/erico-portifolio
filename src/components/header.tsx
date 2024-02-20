"use client";

import { ButtonWithIcon } from "@/components/button-with-icon";
import {
  STACK,
  ACADEMIC,
  CONTACT,
  DOWNLOAD,
  HOME,
  PROFESSIONAL,
  RECOMENDATION,
  HEADER_BUTTONS_LIST,
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
      case STACK:
        stackInfoReference.current?.scrollIntoView(SCROLLING_PROPERTIES);
        break;
      case ACADEMIC:
        academicInfoReference.current?.scrollIntoView(SCROLLING_PROPERTIES);
        break;
      case PROFESSIONAL:
        professionalInfoReference.current?.scrollIntoView(SCROLLING_PROPERTIES);
        break;
      case RECOMENDATION:
        recomendationlInfoReference.current?.scrollIntoView(SCROLLING_PROPERTIES);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <header className="px-12 h-20 flex justify-start items-center my-2 mt-3 relative">
        <div className="flex justify-between items-center">
          {HEADER_BUTTONS_LIST.map((item) => (
            <div
              key={Math.random()}
              onClick={() => handleScrollByReference(item.ref)}
            >
              {item.ref == DOWNLOAD ? (
                <a
                  href={
                    language == LANGUAGES.PTBR
                      ? "/curriculum.pdf"
                      : "/curriculum-english.pdf"
                  }
                  download
                >
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
        </div>
        <div className="flex absolute right-28 2xl:right-16 small-breakpoint:flex-col 
        small-breakpoint:right-8 small-breakpoint:gap-3">
          <Image
            className={`ml-4 cursor-pointer transition-all duration-200 ${
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
      </header>
    </>
  );
}
