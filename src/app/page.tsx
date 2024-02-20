"use client";

import MyInformation from "@/components/my-information";
import StackInformation from "@/components/stack-information";
import AcademicInformation from "@/components/academic-information";
import ProfessionalInformation from "@/components/professional-information";
import RecomendationsInformation from "@/components/recomendations-information";

export default function Home() {
  return (
    <main>
      <MyInformation />
      <div className="flex bg-gradient-to-b from-[#130526] to-[#250850] pb-8 mid-breakpoint:h-auto px-20 2xl:px-40 mid-breakpoint:px-0">
        <ProfessionalInformation />
      </div>
      <div className="flex mid-breakpoint:flex-col mid-breakpoint:h-auto bg-gradient-to-t from-[#130526] to-[#250850] h-[400px] px-20 2xl:px-40 small-breakpoint:px-0 mb-8">
        <StackInformation />
        <AcademicInformation />
      </div>
      <div className="flex bg-gradient-to-b from-[#130526] to-[#250850] h-auto px-20 2xl:px-40 pb-8 mid-breakpoint:px-0">
        <RecomendationsInformation />
      </div>
    </main>
  );
}