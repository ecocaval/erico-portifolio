type educationalListType = {
  PTBR: institutionType;
  EN: institutionType;
};

type institutionType = {
  institution: string;
  course: string;
  period: {
    from: string;
    to: string;
  };
}[];

export const EDUCATIONAL_LIST: educationalListType = {
  PTBR: [
    {
      institution: "Faculdade Anhanguera",
      course: "Sistemas de Informação",
      period: {
        from: "2024",
        to: "Presente",
      },
    },
    {
      institution: "Universidade Federal De Santa Catarina (UFSC)",
      course: "Engenharia Eletrônica",
      period: {
        from: "2019",
        to: "2024",
      },
    },
    {
      institution: "Universidade Federal De Santa Catarina (UFSC)",
      course: "Engenharia Mecânica",
      period: {
        from: "2018",
        to: "2019",
      },
    },
  ],
  EN: [
    {
      institution: "Anhanguera College",
      course: "Information Systems",
      period: {
        from: "2024",
        to: "Present",
      },
    },
    {
      institution: "Federal University of Santa Catarina (UFSC)",
      course: "Electronic Engineering",
      period: {
        from: "2019",
        to: "2024",
      },
    },
    {
      institution: "Federal University of Santa Catarina (UFSC)",
      course: "Mechanical Engineering",
      period: {
        from: "2018",
        to: "2019",
      },
    },
  ],
};
