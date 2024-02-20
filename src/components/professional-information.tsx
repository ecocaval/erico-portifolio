import Image from "next/image";
import { useContext, useState } from "react";
import SmallLayoutDot from "./small-layout-dot";
import { COMPANIES_LIST, PETZ } from "@/app/utils/companies-list";
import { ReferenceToScrollContext } from "@/contexts/referenceToScrollContext";
import { LANGUAGES, LanguageContext } from "@/contexts/languageContext";

export default function ProfessionalInformation() {
  const [selectedCompany, setSelectedCompany] = useState(COMPANIES_LIST[0]);

  const { professionalInfoReference } = useContext(ReferenceToScrollContext);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="w-full mt-8" ref={professionalInfoReference}>
        <h2 className="text-white text-4xl">
          {language == LANGUAGES.PTBR
            ? "Experiência Profissional:"
            : "Work Experience:"}
        </h2>
        <div className="mt-10 flex gap-8 justify-between">
          <div className="w-1/3 h-auto">
            <div className="flex h-auto gap-20 items-center">
              {COMPANIES_LIST.map((company, _) => (
                <div key={Math.random()} className="h-20 cursor-pointer">
                  <div
                    onMouseMove={() => {
                      setSelectedCompany(company);
                    }}
                    className="h-2/3 flex items-center"
                  >
                    <Image
                      className={company.className}
                      src={company.src}
                      alt={company.alt}
                      width={company.width}
                      height={company.height}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`flex flex-col justify-start items-center gap-4 transition-all duration-700 ${
                selectedCompany.name === PETZ
                  ? "w-[144px]"
                  : "w-[76px] ml-[222px]"
              }`}
            >
              <div
                className={`bg-white transition-all duration-700 w-full h-1 opacity-40`}
              />
            </div>
            <div className="h-2/3 flex items-center">
              <div
                className={`${
                  selectedCompany.name === PETZ
                    ? "border-[#175EA8]"
                    : "border-[#f58634] ml-32"
                } border-4 transition-all duration-500 py-4 px-8 rounded-2xl`}
              >
                <p className="text-4xl text-white">{selectedCompany.name}</p>
                <p className="text-xl text-white opacity-70">
                  {(language == LANGUAGES.PTBR
                    ? selectedCompany.workMode.PTBR
                    : selectedCompany.workMode.EN) +
                    " - " +
                    selectedCompany.workRegime}
                </p>
              </div>
            </div>
          </div>
          <div className={`rounded-2xl w-2/3 h-[340px] px-10 py-6 mr-20`}>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                  {(language == LANGUAGES.PTBR
                    ? selectedCompany.jobOccupations.PTBR
                    : selectedCompany.jobOccupations.EN
                  ).map((occupation) => (
                    <div key={Math.random()} className="flex gap-6">
                      <SmallLayoutDot additionalCss="mt-4" />
                      <div>
                        <div className="text-lg flex items-center h-[24px] mt-2 opacity-60">
                          <p className="text-lg text-white">
                            {occupation.period.from}
                          </p>
                          <p className="text-4xl text-white mx-2 mb-2">{"→"}</p>
                          <p className="text-white">{occupation.period.to}</p>
                        </div>
                        <p className="text-white text-lg">
                          {occupation.occupation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-2/5 h-auto flex items-center">
                  <Image
                    className="object-contain"
                    src={selectedCompany.src}
                    alt={selectedCompany.alt}
                    width={selectedCompany.width * 1.5}
                    height={selectedCompany.height * 1.5}
                  />
                </div>
              </div>
              <p className="text-lg text-white mt-4 text-justify">
                {language == LANGUAGES.PTBR
                  ? selectedCompany.description.PTBR
                  : selectedCompany.description.EN}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
