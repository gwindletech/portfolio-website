import React from "react";
import { FaBrain, FaLanguage, FaSchool, FaStethoscope } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import walking_tour_screenshot from "@/public/walking_tour_screenshot.png";
import weather_app_screenshot from "@/public/weather_app_screenshot.png";
import happiness_app_screenshot from "@/public/happiness_app_screenshot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Arts",
    location: "University of Queensland",
    description:
      "I graduated with majors in Japanese and German. My undegraduate degree included two semesters at the University of Tübingen.",
    icon: React.createElement(LuGraduationCap),
    date: "2006 - 2008",
  },
  {
    title: "Honours in Japanese",
    location: "University of Queensland",
    description:
      "I completed an additional year of Japanese study, graduating with first-class honours.",
    icon: React.createElement(LuGraduationCap),
    date: "2010 - 2011",
  },
  {
    title: "JET Programme",
    location: "Joetsu City, Japan",
    description:
      "I worked for two years as an Assistant Language Teacher at primary and junior high schools.",
    icon: React.createElement(FaSchool),
    date: "2011 - 2013",
  },
  {
    title: "Freelance Translator",
    location: "Brisbane and Sydney",
    description:
      "I worked as an online freelance translator for the language pairs Japanese > English and German > English.",
    icon: React.createElement(FaLanguage),
    date: "2013 - 2015",
  },
  {
    title: "Doctor of Medicine",
    location: "Griffith University",
    description:
      "I completed a Doctor of Medicine, the final year of which included an elective 6-week observership at Hiroshima University Hospital. I graduated with distinction.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2019",
  },
  {
    title: "Internship",
    location: "Redcliffe Hospital",
    description:
      "I completed my internship year at Redcliffe Hospital, with rotations in orthopaedic surgery, general medicine, psychiatry, and emergency medicine.",
    icon: React.createElement(FaStethoscope),
    date: "2020 - 2021",
  },
  {
  title: "Principal House Officer",
  location: "Caboolture Hospital",
  description:
    "I completed 6 months as a Principal House Officer in the Mental Health Department before applying for specialist training.",
  icon: React.createElement(FaBrain),
  date: "2021",
},
{
  title: "Psychiatric Registrar",
  location: "Caboolture and Redcliffe Hospitals",
  description:
    "I am currently a trainee with the Royal Australian and New Zealand College of Psychiatrists.",
  icon: React.createElement(FaBrain),
  date: "2021 - present",
},
] as const;

export const projectsData = [
  {
    title: "Django Project",
    description:
      "A simple project using Django and Bootstrap. ",
    tags: ["Python", "Django", "Bootstrap",],
    imageUrl: walking_tour_screenshot,
  },
  {
    title: "Coming Soon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    tags: ["Python", "Streamlit",],
    imageUrl: happiness_app_screenshot,
  },
  {
    title: "Coming Soon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Python", "Streamlit",],
    imageUrl: weather_app_screenshot,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Streamlit",
  "Microsoft Power Apps",
  "Microsoft Power Automate",
  "Microsoft Office Scripts",
  "Visual Basic for Applications",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
] as const;
