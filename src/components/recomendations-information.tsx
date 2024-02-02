import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { COMPANIES_LIST } from "@/app/utils/companies-list";
import { RECOMENDATION_LIST } from "@/app/utils/recomendation-list";

export default function RecomendationsInformation() {
  return (
    <>
      <div className="w-full mt-8">
        <h2 className="text-white text-4xl">Recomendações:</h2>
        <div className="flex justify-center items-center">
          <div className="w-1/2 mt-8">
            <Carousel>
              <CarouselContent className="flex items-center">
                {RECOMENDATION_LIST.map((recommendation, _) => (
                  <CarouselItem key={Math.random()}>
                    <div
                      className={`w-full h-auto transition-all duration-300 flex justify-center items-center cursor-grab`}
                    >
                      <div
                        className={`bg-gradient-to-b from-[#392359a9] to-[#130526] rounded-3xl w-4/5 h-4/5 p-8 flex flex-col gap-6`}
                      >
                        <div className="flex gap-4">
                          <Image
                            className="rounded-full object-contain"
                            src={recommendation.personImage}
                            alt={recommendation.personImage + " logo"}
                            width={70}
                            height={70}
                          />
                          <div>
                            <p className="text-white mt-2 text-lg">
                              {recommendation.personName}
                            </p>
                            <p className="text-white opacity-50">
                              {recommendation.personOccupation}
                            </p>
                          </div>
                        </div>
                        <p className="text-lg text-white text-ellipsis opacity-90 text-justify">
                          {'"' +
                            recommendation.content +
                            (recommendation.content[
                              recommendation.content.length - 1
                            ] === "."
                              ? ""
                              : ".") +
                            '"'}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
