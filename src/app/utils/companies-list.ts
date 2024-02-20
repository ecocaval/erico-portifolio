export const PETZ = "Petz";
export const DOUTORIE = "DoutorIE";

export const COMPANIES_LIST = [
  {
    name: PETZ,
    themeColor: "#175EA8",
    className: "object-fill",
    src: "/petz.png",
    alt: "petz logo",
    width: 144,
    height: 76,
    workMode: {
      PTBR: "Home Office",
      EN: "Home Office"
    },
    workRegime: "PJ",
    jobOccupations: {
      PTBR: [
        {
          period: {
            from: "DEZ 2023",
            to: "PRESENTE",
          },
          occupation: "Desenvolvedor Backend Pleno",
        },
        {
          period: {
            from: "ABR 2023",
            to: "NOV 2023",
          },
          occupation: "Analista Sysops Backend",
        },
      ],
      EN: [
        {
          period: {
            from: "DEC 2023",
            to: "PRESENT",
          },
          occupation: "Mid-Level Backend Developer",
        },
        {
          period: {
            from: "APR 2023",
            to: "NOV 2023",
          },
          occupation: "Sysops Backend Analyst",
        },
      ],
    },
    description: {
      PTBR: "Desenvolvedor de Software responsável pelo desenvolvimento e manutenção de microsserviços em áreas de cliente, pet, autenticação e preferências do usuário. Experiência com Spring Boot, AWS (SNS, SQS), CI/CD, Scrum e monitoramento via Grafana.",
      EN: "Software Developer responsible for the development and maintenance of microservices in customer, pet, authentication, and user preferences areas. Experience with Spring Boot, AWS (SNS, SQS), CI/CD, Scrum, and monitoring through Grafana.",
    },
  },
  {
    name: DOUTORIE,
    themeColor: "#f58634",
    className: "object-fill",
    src: "/doutorie.png",
    alt: "doutorie logo",
    width: 76,
    height: 76,
    workMode: {
      PTBR: "Presencial",
      EN: "In Person"
    },
    workRegime: "CLT",
    jobOccupations: {
      PTBR: [
        {
          period: {
            from: "FEV 2021",
            to: "AGO 2022",
          },
          occupation: "Desenvolvedor Júnior",
        },
        {
          period: {
            from: "NOV 2019",
            to: "JAN 2021",
          },
          occupation: "Estagiário",
        },
      ],
      EN: [
        {
          period: {
            from: "FEB 2021",
            to: "AUG 2022",
          },
          occupation: "Junior Developer",
        },
        {
          period: {
            from: "NOV 2019",
            to: "JAN 2021",
          },
          occupation: "Trainee",
        },
      ],
    },
    description: {
      PTBR: "Como Desenvolvedor Júnior na área de sistemas automotivos, contribuí significativamente no desenvolvimento do app mobile e desktop (windows only) da plataforma e na modernização do site da empresa, aprimorando funcionalidades e participando ativamente no design.",
      EN: "As a Junior Developer in the automotive systems area, I significantly contributed to the development of the mobile and desktop app (Windows only) of the platform and in modernizing the company's website, enhancing functionalities and actively participating in the design.",
    },
  },
];
