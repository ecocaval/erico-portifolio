import { buttonWithIconPropsType } from "@/components/button-with-icon";

export const HEADER_BUTTONS_LIST: buttonWithIconPropsType[] = [
  {
    iconSourcePath: "/home.svg",
    darkIconSourcePath: "/home-dark.svg",
    iconAltText: "home icon",
    iconWidth: 20,
    iconHeight: 17,
    buttonText: "Home",
    iconAdditionalCss: "",
    textAdditionalCss: "",
    buttonAdditionalCss: "hover:bg-white duration-300 ease"
  },
  {
    iconSourcePath: "/about.svg",
    darkIconSourcePath: "/about-dark.svg",
    iconAltText: "about icon",
    iconWidth: 20,
    iconHeight: 20,
    buttonText: "Sobre",
    iconAdditionalCss: "",
    textAdditionalCss: "",
    buttonAdditionalCss: "hover:bg-white duration-300 ease"
  },
  {
    iconSourcePath: "/professional-xp.svg",
    darkIconSourcePath: "/professional-xp-dark.svg",
    iconAltText: "professional xp icon",
    iconWidth: 20,
    iconHeight: 19,
    buttonText: "XP Profissional",
    iconAdditionalCss: "",
    textAdditionalCss: "",
    buttonAdditionalCss: "hover:bg-white duration-300 ease"
  },
  {
    iconSourcePath: "/contact.svg",
    darkIconSourcePath: "/contact-dark.svg",
    iconAltText: "contact icon",
    iconWidth: 16,
    iconHeight: 16,
    buttonText: "Contato",
    iconAdditionalCss: "",
    textAdditionalCss: "",
    buttonAdditionalCss: "hover:bg-white duration-300 ease"
  },
  {
    iconSourcePath: "/download.svg",
    darkIconSourcePath: "/download-dark.svg",
    iconAltText: "download icon",
    iconWidth: 20,
    iconHeight: 20,
    buttonText: "Download Curriculum Vitae",
    buttonAdditionalCss: "hover:bg-white duration-300 ease bg-[#2B1E3C] border border-gray-500 ml-[340px]",
    iconAdditionalCss: "",
    textAdditionalCss: "",
  },
];
