import { buttonWithIconPropsType } from "@/components/button-with-icon";

export const CONTACT_ME_BUTTONS_LIST: buttonWithIconPropsType[] = [
  {
    iconSourcePath: "/whatsapp.svg",
    darkIconSourcePath: "/whatsapp-dark.svg",
    iconAltText: "whatsapp icon",
    iconWidth: 20,
    iconHeight: 20,
    buttonText: "Whatsapp",
    buttonAdditionalCss: "hover:bg-white duration-300 ease bg-[#005C4B] w-[165px] pl-6 ml-0",
    iconAdditionalCss: "",
    textAdditionalCss: "",
    href: "https://wa.me/qr/QL3CYY5QKRNAC1"
  },
  {
    iconSourcePath: "/linkedin.svg",
    darkIconSourcePath: "/linkedin-dark.svg",
    iconAltText: "linkedin icon",
    iconWidth: 20,
    iconHeight: 20,
    buttonText: "Linkedin",
    buttonAdditionalCss: "hover:bg-white duration-300 ease bg-[#0A66C2] w-[165px] pl-6",
    iconAdditionalCss: "",
    textAdditionalCss: "",
    href: "https://www.linkedin.com/in/%C3%A9rico-cavalcanti/"
  },
  {
    iconSourcePath: "/github.svg",
    darkIconSourcePath: "/github-dark.svg",
    iconAltText: "github icon",
    iconWidth: 20,
    iconHeight: 20,
    buttonText: "Github",
    buttonAdditionalCss: "hover:bg-white duration-300 ease bg-[#2C2C2C] w-[165px] pl-6 mr-0",
    iconAdditionalCss: "",
    textAdditionalCss: "",
    href: "https://github.com/ecocaval"
  }
];
