import { FaUsers } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { GiPodium } from "react-icons/gi";
import { LiaNewspaperSolid } from "react-icons/lia";

export const offerings = [
  {
    title: "SEMINARS",
    description:
      "In-depth seminars offering insight into AI's latest technologies and advancements.",
    icon: <FaUsers className="text-5xl text-ai-blue-500" />,
  },
  {
    title: "GUEST SPEAKERS",
    description:
      "Engaging sessions with AI experts, industry professionals, and prominent researchers.",
    icon: <RiPresentationFill className="text-5xl text-ai-blue-500" />,
  },
  {
    title: "COMPETITIONS",
    description:
      "Challenge yourself and team up with peers in our AI competitions. A chance to put theory into practice.",
    icon: <GiPodium className="text-5xl text-ai-blue-500" />,
  },
  {
    title: "AI NEWS AND OPPORTUNITIES",
    description:
      "Stay informed with the most recent developments, breakthroughs, and job opportunities in the AI realm.",
    icon: <LiaNewspaperSolid className="text-5xl text-ai-blue-500" />,
  },
];
