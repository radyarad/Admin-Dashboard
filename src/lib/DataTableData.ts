export type Member = {
  id: string;
  name: string;
  email: string;
  position: "Direksi" | "VP" | "Officer" | "Staff" | "Intern";
  image: string;
};

const data: Member[] = [
  {
    id: "m5gr84i9",
    name: "Raihan",
    email: "Raihanjaw@example.com",
    position: "Direksi",
    image: "/Raijaw.jpg",
  },
  {
    id: "3u1reuv4",
    name: "Ola",
    email: "ajemijaw@example.com",
    position: "Staff",
    image: "/Dekola.jpg",
  },
  {
    id: "derv1ws0",
    name: "abedul",
    email: "abedul@example.com",
    position: "Officer",
    image: "/Azjaw.jpg",
  },
  {
    id: "5kma53ae",
    name: "putra",
    email: "rakamaumitik@example.com",
    position: "Intern",
    image: "/pulpes.jpg",
  },
  {
    id: "bhqecj4p",
    name: "Radya",
    email: "Radya@example.com",
    position: "VP",
    image: "/Dapadang.jpg",
  },
];

export default data;
