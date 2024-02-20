import { CONTACT_ME_BUTTONS_LIST } from "@/app/utils/contact-me-buttons-list";
import { ButtonWithIcon } from "./button-with-icon";
import Image from "next/image";
import { useContext } from "react";
import { LANGUAGES, LanguageContext } from "@/contexts/languageContext";

export default function MyInformation() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex justify-center mb-4">
      <div className="flex p-2 pt-8 justify-around">
        <div className="pr-28 pt-4">
          <h1 className="text-white text-4xl leading-tight">
            {language == LANGUAGES.PTBR ? "Olá, eu sou o" : "Hi, I am"} <br />
            Érico Cavalcanti
          </h1>
          <h2 className="text-white text-2xl py-6 font-extrabold">
            {language == LANGUAGES.PTBR
              ? "Desenvolvedor Full-stack Pleno"
              : "Mid-level Full-stack Developer"}
          </h2>
          <p className="text-white text-lg w-[500px]">
            {language == LANGUAGES.PTBR
              ? "Atualmente trabalhando no ecommerce Petz como desenvolvedor backend pleno."
              : "Currently working at Petz ecommerce as a mid-level backend developer."}
          </p>
          <div className="w-full flex justify-between mt-10">
            {CONTACT_ME_BUTTONS_LIST.map((item) => (
              <ButtonWithIcon
                key={Math.random()}
                iconSourcePath={item.iconSourcePath}
                darkIconSourcePath={item.darkIconSourcePath}
                iconAltText={item.iconAltText}
                iconWidth={item.iconWidth}
                iconHeight={item.iconHeight}
                buttonText={item.buttonText}
                buttonAdditionalCss={item.buttonAdditionalCss}
                iconAdditionalCss={item.iconAdditionalCss}
                textAdditionalCss={item.textAdditionalCss}
                href={item.href}
              ></ButtonWithIcon>
            ))}
          </div>
        </div>
        <div className="relative w-[400px] h-[400px]">
          <Image
            className="rounded-full absolute z-10 min-w-[350px] min-h-[350px]"
            src="/self-image.png"
            alt="Self Image Logo"
            width={350}
            height={350}
          />
          <div
            className="w-[350px] h-[350px] rounded-full bg-gradient-to-b 
          from-white to-transparent filter absolute left-4 
          drop-shadow-[10px_10px_20px_rgba(255,255,255,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}
