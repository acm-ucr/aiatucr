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
    icon: <FaUsers className="size-12 text-[#4F9AD7]" />,
  },
  {
    title: "GUEST SPEAKERS",
    description:
      "Engaging sessions with AI experts, industry professionals, and prominent researchers.",
    icon: <RiPresentationFill className="size-12 text-[#4F9AD7]" />,
  },
  {
    title: "COMPETITIONS",
    description:
      "Challenge yourself and team up with peers in our AI competitions. A chance to put theory into practice.",
    icon: <GiPodium className="size-12 text-[#4F9AD7]" />,
  },
  {
    title: "AI NEWS AND OPPORTUNITIES",
    description:
      "Stay informed with the most recent developments, breakthroughs, and job opportunities in the AI realm.",
    icon: <LiaNewspaperSolid className="size-12 text-[#4F9AD7]" />,
  },
];

const OfferingCards = ({}) => {
  return (
    <section className="p-4">
      <h2 className="text-4xl text-[#4F9AD7] text-center m-8">We Offer...</h2>
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
