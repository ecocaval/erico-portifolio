"use client";

import { MutableRefObject, ReactNode, createContext, useRef } from "react";

type ReferenceToScrollContextType = {
  stackInfoReference: MutableRefObject<HTMLDivElement | null>;
  academicInfoReference: MutableRefObject<HTMLDivElement | null>;
  professionalInfoReference: MutableRefObject<HTMLDivElement | null>;
  recomendationlInfoReference: MutableRefObject<HTMLDivElement | null>;
};

export const ReferenceToScrollContext = createContext(
  {} as ReferenceToScrollContextType
);

export function ReferenceToScrollContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const stackInfoReference = useRef(null);
  const academicInfoReference = useRef(null);
  const professionalInfoReference = useRef(null);
  const recomendationlInfoReference = useRef(null);

  return (
    <ReferenceToScrollContext.Provider
      value={{
        stackInfoReference,
        academicInfoReference,
        professionalInfoReference,
        recomendationlInfoReference,
      }}
    >
      {children}
    </ReferenceToScrollContext.Provider>
  );
}
