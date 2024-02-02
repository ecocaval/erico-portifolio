import { CONTACT_ME_BUTTONS_LIST } from "@/app/utils/contact-me-buttons-list";
import { ButtonWithIcon } from "./button-with-icon";
import Image from "next/image";

export default function MyInformation() {
  return (
    <div className="flex justify-center mb-4">
      <div className="flex p-2 pt-8 justify-around">
        <div className="pr-28 pt-4">
          <h1 className="text-white text-4xl leading-tight">
            Olá, eu sou o <br />
            Érico Cavalcanti
          </h1>
          <h2 className="text-white text-2xl py-6 font-extrabold">
            Desenvolvedor Full-stack Pleno
          </h2>
          <p className="text-white text-lg">
            Atualmente trabalhando no ecommerce Petz <br />
            como desenvolvedor backend pleno.
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
            className="w-[350px] h-[350px] rounded-full bg-gradient-to-b from-white to-transparent filter absolute left-4 drop-shadow-[10px_10px_20px_rgba(255,255,255,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}
