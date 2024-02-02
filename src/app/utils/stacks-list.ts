import { buttonWithIconPropsType } from "@/components/button-with-icon";
import { stackButtonPropsType } from "@/components/stack-button";

const JAVA = "Java";
const TYPESCRIPT = "Typescript";

export const STACKS = { java: JAVA, typescript: TYPESCRIPT };

export interface stackType extends Omit<stackButtonPropsType, "selectedStack"> {
  description: string;
  technologies: buttonWithIconPropsType[]
}

export let stacksList: stackType[] = [
  {
    stack: STACKS.java,
    iconSourcePath: "/java.svg",
    iconAltText: "java icon",
    iconWidth: 41,
    iconHeight: 56,
    description: "Conhecimento em Microsserviços, JPA, JDBC, Spring Security, Feign...",
    technologies: [
      {
        iconSourcePath: "/spring.svg",
        iconAltText: "spring icon",
        iconWidth: 23,
        iconHeight: 22,
        buttonText: "Spring Boot 3+",
      },
      {
        iconSourcePath: "/kafka.svg",
        iconAltText: "kafka icon",
        iconWidth: 19,
        iconHeight: 30,
        buttonText: "Apache Kafka",
        iconAdditionalCss: ""
      },
      {
        iconSourcePath: "/aws.svg",
        iconAltText: "aws icon",
        iconWidth: 26,
        iconHeight: 16,
        buttonText: "AWS (SNS & SQS)",
      },
    ],
  },
  {
    stack: STACKS.typescript,
    iconSourcePath: "/typescript.svg",
    iconAltText: "typescript icon",
    iconWidth: 42,
    iconHeight: 42,
    description: "Conhecimento nos conceitos gerais de React e noções básicas de UI/UX...",
    technologies: [
      {
        iconSourcePath: "/next.svg",
        iconAltText: "next icon",
        iconWidth: 22,
        iconHeight: 22,
        buttonText: "NextJS (12,13,14)",
      },
      {
        iconSourcePath: "/prisma.svg",
        iconAltText: "prisma icon",
        iconWidth: 21,
        iconHeight: 27,
        buttonText: "Prisma",
      },
      {
        iconSourcePath: "/tailwind.svg",
        iconAltText: "tailwind icon",
        iconWidth: 31,
        iconHeight: 19,
        buttonText: "Tailwind CSS",
      },
    ],
  },
];
