import type { CareerType, I18nData } from "@/types";

const educations_en: CareerType[] = [
  {
    title: "Sungkyunkwan University",
    role: "Master of Engineering in Computer Science and Engineering",
    location: "Suwon, South Korea",
    date: "Sep. 2023 - Present",
    description: "GPA: 4.31/4.5",
    url: "https://cse.skku.edu",
  },
  {
    title: "Sungkyunkwan University",
    role: "Bachelor of Science in Computer Science and Education",
    location: "Seoul, South Korea",
    date: "Mar. 2019 - Aug. 2023",
    description: "GPA: 3.89/4.5",
    url: "https://comedu.skku.edu",
  },
  {
    title: "Kyunggi High School",
    role: "Graduated",
    location: "Seoul, South Korea",
    date: "Mar. 2015 - Feb. 2018",
    url: "https://kyunggi.sen.hs.kr",
  },
];

const educations_ko: CareerType[] = [
  {
    title: "성균관대학교",
    role: "소프트웨어학과 석사과정 (2025년 2월 졸업 예정)",
    location: "수원, 대한민국",
    date: "2023년 9월 - 현재",
    description: "학점: 4.31/4.5",
    url: "https://cse.skku.edu",
  },
  {
    title: "성균관대학교",
    role: "컴퓨터교육과 이학사",
    location: "서울, 대한민국",
    date: "2019년 3월 - 2023년 8월",
    description: "학점: 3.89/4.5",
    url: "https://comedu.skku.edu",
  },
  {
    title: "경기고등학교",
    role: "졸업",
    location: "서울, 대한민국",
    date: "2015년 3월 - 2018년 2월",
    url: "https://kyunggi.sen.hs.kr",
  },
];

export const educations: I18nData<CareerType[]> = {
  en: educations_en,
  ko: educations_ko,
};
