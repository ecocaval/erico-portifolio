"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type languageType = "PT-BR" | "EN";

export const LANGUAGES = {
  PTBR: "PT-BR" as languageType,
  EN: "EN" as languageType,
}

type LanguageContextType = {
  language: languageType;
  setLanguage: Dispatch<SetStateAction<languageType>>;
};

export const LanguageContext = createContext({} as LanguageContextType);

export function LanguageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<languageType>(LANGUAGES.PTBR);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
