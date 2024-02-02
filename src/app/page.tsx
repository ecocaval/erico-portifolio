"use client";

import MyInformation from "@/components/my-information";
import StackInformation from "@/components/stack-information";
import AcademicInformation from "@/components/academic-information";
import ProfessionalInformation from "@/components/professional-information";

export default function Home() {
  return (
    <main>
      <MyInformation />
      <div className="flex bg-gradient-to-b from-[#130526] to-[#250850] h-[400px] px-40">
        <StackInformation />
        <AcademicInformation />
      </div>
      <div className="flex bg-gradient-to-t from-[#130526] to-[#250850] h-[500px] px-40">
        <ProfessionalInformation />
      </div>
    </main>
  );
}
