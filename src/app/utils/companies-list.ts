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
    workMode: "Home Office",
    workRegime: "PJ",
    jobOccupations: [
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
    description:
      "Desenvolvedor de Software responsável pelo desenvolvimento e manutenção de microsserviços em áreas de cliente, pet, autenticação e preferências do usuário. Experiência com Spring Boot, AWS (SNS, SQS), CI/CD, Scrum e monitoramento via Grafana.",
  },
  {
    name: DOUTORIE,
    themeColor: "#f58634",
    className: "object-fill",
    src: "/doutorie.png",
    alt: "doutorie logo",
    width: 76,
    height: 76,
    workMode: "Presencial",
    workRegime: "CLT",
    jobOccupations: [
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
    description: "To do.", //!FIXME
  },
];
