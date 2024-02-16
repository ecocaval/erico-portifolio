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

export default function Header() {
  const {
    stackInfoReference,
    academicInfoReference,
    professionalInfoReference,
    recomendationlInfoReference,
  } = useContext(ReferenceToScrollContext);

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
      <header className="px-12 h-20 flex justify-start items-center my-2 mt-3">
        <div className="flex justify-center items-center">
          {headerButtonsList.map((item) => (
            <div
              key={Math.random()}
              onClick={() => handleScrollByReference(item.ref)}
            >
              {item.ref == DOWNLOAD ? (
                <a href="/curriculum.pdf" download>
                  <ButtonWithIcon
                    iconSourcePath={item.iconSourcePath}
                    darkIconSourcePath={item.darkIconSourcePath}
                    iconAltText={item.iconAltText}
                    iconWidth={item.iconWidth}
                    iconHeight={item.iconHeight}
                    buttonText={item.buttonText}
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
                  buttonText={item.buttonText}
                  buttonAdditionalCss={item.buttonAdditionalCss}
                  iconAdditionalCss={item.iconAdditionalCss}
                  textAdditionalCss={item.textAdditionalCss}
                />
              )}
            </div>
          ))}
        </div>
      </header>
    </>
  );
}
