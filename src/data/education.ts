export interface EducationItem {
  title: string;
  org: string;
  period: string;
  detail?: string;
  logo?: string;
}

export const education: EducationItem[] = [
  {
    title: "BSc in Software Engineering",
    org: "Bethlehem University",
    period: "2020 – 2024",
    detail: "GPA 2.93",
    logo: "bethlehem-university.svg",
  },
  {
    title: "High School Diploma — IT Stream",
    org: "Bethlehem High School for Boys",
    period: "2018 – 2020",
    detail: "Score: 96.4%",
    logo: "bethlehem-high-school.svg",
  },
  {
    title: "Access English Language Scholarship",
    org: "American Councils — U.S. Consulate",
    period: "2016 – 2018",
    logo: "american-councils.png",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
];
