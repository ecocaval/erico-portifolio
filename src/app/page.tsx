"use client";

import Image from "next/image";
import { contactMeButtonsList } from "./utils/contact-me-buttons-list";
import { ButtonWithIcon } from "@/components/button-with-icon";
import { useState } from "react";
import { stacksList } from "./utils/stacks-list";
import StackButton from "@/components/stack-button";
import BigLayoutDot from "@/components/big-layout-dot";
import SmallLayoutDot from "@/components/small-layout-dot";
import { educationalList } from "./utils/educational-list";

export default function Home() {
  const [selectedStack, setSelectedStack] = useState(stacksList[0]);
  const [previousSelectedStack, setPreviousSelectedStack] = useState(
    stacksList[0]
  );

  return (
    <main>
      <div className="flex justify-center mb-4">
        <div className="flex p-2 pt-8 justify-around">
          <div className="pr-28 pt-8">
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
              {contactMeButtonsList.map((item) => (
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
              className="w-[350px] h-[350px] rounded-full bg-gradient-to-b from-white to-transparent 
            filter absolute left-4 drop-shadow-[10px_10px_20px_rgba(255,255,255,0.5)]"
            />
          </div>
        </div>
      </div>
      <div className="flex bg-gradient-to-b from-[#130526] to-[#250850] h-[450px] px-40">
        <div className="w-1/2">
          <h2 className="text-white text-4xl">Stack Utilizada:</h2>
          <div className="flex mt-8">
            <div className="">
              {stacksList.map((item) => (
                <div
                  key={Math.random()}
                  onMouseMove={() => {
                    if (selectedStack === previousSelectedStack) {
                      setSelectedStack(item);
                      setTimeout(() => setPreviousSelectedStack(item), 700);
                    }
                  }}
                >
                  <StackButton
                    iconSourcePath={item.iconSourcePath}
                    iconAltText={item.iconAltText}
                    iconWidth={item.iconWidth}
                    iconHeight={item.iconHeight}
                    stack={item.stack}
                    selectedStack={selectedStack}
                  />
                </div>
              ))}
            </div>
            <div
              className={`rounded-2xl bg-[#ffffff1d] border border-gray-500 w-full min-w-80 h-auto 
            mb-10 ml-20 p-4 mr-10`}
            >
              <div
                className={`flex flex-col gap-2 ${
                  previousSelectedStack !== selectedStack
                    ? "animate-fadein"
                    : ""
                }`}
              >
                {selectedStack.technologies.map((item) => (
                  <ButtonWithIcon
                    key={Math.random()}
                    iconSourcePath={item.iconSourcePath}
                    iconAltText={item.iconAltText}
                    iconWidth={item.iconWidth}
                    iconHeight={item.iconHeight}
                    buttonText={item.buttonText}
                    buttonAdditionalCss={
                      "hover:pl-8 duration-300 ease " + item.buttonAdditionalCss
                    }
                    iconAdditionalCss={
                      "group-hover:opacity-100 " + item.iconAdditionalCss
                    }
                    textAdditionalCss={
                      "group-hover:text-white " + item.textAdditionalCss
                    }
                  ></ButtonWithIcon>
                ))}
                <p className="px-4 text-white text-lg">
                  {selectedStack.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto ml-20">
          <h2 className="text-white text-4xl">Formação Acadêmica:</h2>
          <div className="mt-8 flex flex-col gap-4">
            {educationalList.map((item, listIndex) => (
              <>
                <div
                  key={Math.random()}
                  className="group flex gap-4 items-start cursor-pointer"
                >
                  <div className="mt-2 flex flex-col gap-2 items-center">
                    <BigLayoutDot />
                    {listIndex !== educationalList.length - 1 &&
                      new Array(5).fill(null).map((_, dotsIndex) => (
                        <div
                          key={Math.random()}
                          className="opacity-50 group-hover:opacity-100 transition-all duration-300"
                        >
                          <SmallLayoutDot
                            additionalCss={
                              "shadow-white group-hover:shadow-2xl " +
                              (dotsIndex === 0 ? "mt-2" : "")
                            }
                          />
                        </div>
                      ))}
                  </div>
                  <Image
                    className="group-hover:ml-4 transition-margin duration-300"
                    src="/high-school.svg"
                    alt="high school logo"
                    width={34}
                    height={28}
                  />
                  <div>
                    <p className="text-lg text-white opacity-80">
                      {item.institution}
                    </p>
                    <div className="text-lg flex items-center h-[24px] mt-2">
                      <p className="text-lg text-white mr-6">{item.course}</p>
                      <p className="text-lg text-white">{item.period.from}</p>
                      <p className="text-4xl text-white mx-2 mb-2">{"→"}</p>
                      <p className="text-white">{item.period.to}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
