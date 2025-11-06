export interface Member {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  link: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Gabriel Batavia Xaverius",
    role: "Founder, Team Leader",
    imageUrl: "/images/team/gabriel.webp",
    link: "https://www.linkedin.com/in/gabriel-batavia-xaverius/",
  },
  {
    id: 2,
    name: "Ekya Muhammad Hasfi F",
    role: "Mobile developer",
    imageUrl: "/images/team/ekya.webp",
    link: "https://www.linkedin.com/in/ekya-muhammad-701729288/",
  },
  {
    id: 3,
    name: "Farrel Augusta Dinata",
    role: "Backend Engineer",
    imageUrl: "/images/team/farrel.webp",
    link: "https://www.linkedin.com/in/farrelad/",
  },
];
