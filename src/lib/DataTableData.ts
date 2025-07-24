export type Member = {
  id: string;
  name: string;
  email: string;
  position: "Direksi" | "VP" | "Officer" | "Staff" | "Intern";
  image: string;
};

const data: Member[] = [
  {
    id: "m1",
    name: "Raihan",
    email: "raihan@example.com",
    position: "Direksi",
    image: "/Raijaw.jpg",
  },
  {
    id: "m2",
    name: "Fajar",
    email: "fajar@example.com",
    position: "Direksi",
    image: "/Raijaw.jpg",
  },

  {
    id: "m3",
    name: "Radya",
    email: "radya@example.com",
    position: "VP",
    image: "/Dapadang.jpg",
  },
  {
    id: "m4",
    name: "Sari",
    email: "sari@example.com",
    position: "VP",
    image: "/Dapadang.jpg",
  },
  {
    id: "m5",
    name: "Joko",
    email: "joko@example.com",
    position: "VP",
    image: "/Dapadang.jpg",
  },

  {
    id: "m6",
    name: "Abedul",
    email: "abedul@example.com",
    position: "Officer",
    image: "/Azjaw.jpg",
  },
  {
    id: "m7",
    name: "Dimas",
    email: "dimas@example.com",
    position: "Officer",
    image: "/Azjaw.jpg",
  },
  {
    id: "m8",
    name: "Rani",
    email: "rani@example.com",
    position: "Officer",
    image: "/Azjaw.jpg",
  },
  {
    id: "m9",
    name: "Bima",
    email: "bima@example.com",
    position: "Officer",
    image: "/Azjaw.jpg",
  },

  {
    id: "m10",
    name: "Ola",
    email: "ola@example.com",
    position: "Staff",
    image: "/Dekola.jpg",
  },
  {
    id: "m11",
    name: "Ayu",
    email: "ayu@example.com",
    position: "Staff",
    image: "/Dekola.jpg",
  },
  {
    id: "m12",
    name: "Dewi",
    email: "dewi@example.com",
    position: "Staff",
    image: "/Dekola.jpg",
  },
  {
    id: "m13",
    name: "Raka",
    email: "raka@example.com",
    position: "Staff",
    image: "/Dekola.jpg",
  },
  {
    id: "m14",
    name: "Yoga",
    email: "yoga@example.com",
    position: "Staff",
    image: "/Dekola.jpg",
  },

  {
    id: "m15",
    name: "Putra",
    email: "putra@example.com",
    position: "Intern",
    image: "/pulpes.jpg",
  },
  {
    id: "m16",
    name: "Galang",
    email: "galang@example.com",
    position: "Intern",
    image: "/pulpes.jpg",
  },
  {
    id: "m17",
    name: "Lina",
    email: "lina@example.com",
    position: "Intern",
    image: "/pulpes.jpg",
  },
  {
    id: "m18",
    name: "Yuli",
    email: "yuli@example.com",
    position: "Intern",
    image: "/pulpes.jpg",
  },
  {
    id: "m19",
    name: "Kevin",
    email: "kevin@example.com",
    position: "Intern",
    image: "/pulpes.jpg",
  },
  {
    id: "m20",
    name: "Adit",
    email: "adit@example.com",
    position: "Intern",
    image: "/pulpes.jpg",
  },
];

export default data;
