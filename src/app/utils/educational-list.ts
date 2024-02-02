type educationalListType = {
  institution: string;
  course: string;
  period: {
    from: string;
    to: string;
  };
}[];

export const educationalList: educationalListType = [
  {
    institution: "Faculdade Anhanguera",
    course: "Sistemas de Informação",
    period: {
        from: "2024",
        to: "Presente"
    }
  },
  {
    institution: "Universidade Federal De Santa Catarina (UFSC)",
    course: "Engenharia Eletrônica",
    period: {
        from: "2019",
        to: "2024"
    }
  },
  {
    institution: "Universidade Federal De Santa Catarina (UFSC)",
    course: "Engenharia Mecânica",
    period: {
        from: "2018",
        to: "2019"
    }
  },
];
