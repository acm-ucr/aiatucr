import OfferingCard from "./OfferingCard";
import { FaUsers } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { GiPodium } from "react-icons/gi";
import { LiaNewspaperSolid } from "react-icons/lia";

const Offerings = [
  {
    title: "SEMINARS",
    description:
      "In-depth seminars offering insight into AI's latest technologies and advancements.",
    icon: <FaUsers className="text-5xl text-ai-blue-400" />,
  },
  {
    title: "GUEST SPEAKERS",
    description:
      "Engaging sessions with AI experts, industry professionals, and prominent researchers.",
    icon: <RiPresentationFill className="text-5xl text-ai-blue-400" />,
  },
  {
    title: "COMPETITIONS",
    description:
      "Challenge yourself and team up with peers in our AI competitions. A chance to put theory into practice.",
    icon: <GiPodium className="text-5xl text-ai-blue-400" />,
  },
  {
    title: "AI NEWS AND OPPORTUNITIES",
    description:
      "Stay informed with the most recent developments, breakthroughs, and job opportunities in the AI realm.",
    icon: <LiaNewspaperSolid className="text-5xl text-ai-blue-400" />,
  },
];

const OfferingCards = () => {
  return (
    <section className="p-4">
      <p className="text-4xl text-ai-blue-400 text-center m-8">We Offer...</p>
      <div className="flex justify-center">
        <div className="inline-grid grid-cols-3 gap-8 w-auto place-items-center">
          {Offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              title={offering.title}
              icon={offering.icon}
              description={offering.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingCards;
