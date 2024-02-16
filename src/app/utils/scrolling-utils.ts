import { MutableRefObject } from "react";

export const scrollToMyRef = (ref: MutableRefObject<HTMLDivElement>) => {
  ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
};
