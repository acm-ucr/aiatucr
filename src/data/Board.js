import Image from "@/public/images/board.png";
import Image1 from "@/images/steeg.png";
import Image4 from "@/images/sazen.png";
import Image6 from "@/images/IMG_9507.jpg";
import Image7 from "@/images/IMG_9453.jpg";
import Image8 from "@/images/JonnyZMeetTheStaffPhoto.png";
export const boards = [
  {
    name: "Dr. Greg Ver Steeg",
    email: "gregory.versteeg@ucr.edu",
    image: Image1,
    role: "Club Advisor",
  },
  {
    name: "Michael Chen",
    email: "michaelluochen@gmail.com",
    image: Image,
    role: "President",
    icon: [
      {
        component: <Github />,
        href: "https://github.com/mchen04",
      },
      {
        component: <LinkedIn />,
        href: "https://www.linkedin.com/in/michael-luo-chen",
      },
    ],
  },
  {
    name: "Emily Ho",
    email: "jdoe123@ucr.edu",
    image: Image,
    role: "Vice President",
  },
  {
    name: "Sazen Shakya",
    email: "sazen2015@gmail.com",
    image: Image4,
    role: "Finance Chair",
    icon: [
      {
        component: <Github />,
        href: "https://github.com/sshakya03",
      },
      {
        component: <LinkedIn />,
        href: "https://www.linkedin.com/in/sazen-shakya/",
      },
    ],
  },
  {
    name: "Freddy Song",
    email: "fredsong99@gmail.com",
    image: Image,
    role: "Secretary",
    icon: [
      {
        components: <Github />,
        href: "https://github.com/MrFrooty",
      },
      {
        components: <LinkedIn />,
        href: "https://www.linkedin.com/in/freddysong/",
      },
    ],
  },
  {
    name: "Megan Yip",
    email: "meganyip04@gmail.com",
    image: Image6,
    role: "Director of Internal Affairs",
    icon: [
      {
        component: <Github />,
        href: "https://github.com/meganyipp",
      },
      {
        component: <LinkedIn />,
        href: "https://www.linkedin.com/in/meganyip04",
      },
    ],
  },
  {
    name: "Christine Kim",
    email: "ckim365@ucr.edu",
    image: Image7,
    role: "Marketing Chair",
    icon: [
      {
        component: <LinkedIn />,
        href: "www.linkedin.com/in/christinek11",
      },
    ],
  },
  {
    name: "Johnny Zhong",
    email: "Johnnyzhong2073@gmail.com",
    image: Image8,
    role: "Marketing Chair",
    icon: [
      {
        component: <Github />,
        href: "https://github.com/johnnyz73",
      },
      {
        component: <LinkedIn />,
        href: "https://www.linkedin.com/in/johnny-zhong-5596a1321/",
      },
    ],
  },
  {
    name: "John Doe",
    email: "jdoe123@ucr.edu",
    image: Image,
    role: "President",
  },
];
