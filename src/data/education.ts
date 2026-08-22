export interface EducationItem {
  title: string;
  org: string;
  period: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    title: "BSc in Software Engineering",
    org: "Bethlehem University",
    period: "2020 – 2024",
    detail: "GPA 2.93",
  },
  {
    title: "High School Diploma — IT Stream",
    org: "",
    period: "2018 – 2020",
    detail: "Score: 96.4%",
  },
  {
    title: "Access English Language Scholarship",
    org: "U.S. Consulate",
    period: "2016 – 2018",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
];
