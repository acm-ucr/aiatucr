import OfferingCard from "./OfferingCard";
import { FaUserAlt } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";
import { GiPodium } from "react-icons/gi";
import { LiaNewspaperSolid } from "react-icons/lia";

const Offerings = [
  {
    title: "SEMINARS",
    description:
      "In-depth seminars offering insight into AI's latest technologies and advancements.",
    icon: <FaUserAlt className="size-12 text-[#4F9AD7]" />,
  },
  {
    title: "GUEST SPEAKERS",
    description:
      "Engaging sessions with AI experts, industry professionals, and prominent researchers.",
    icon: <RiPresentationFill className="size-12 text-[#4F9AD7]" />,
  },
  null,
  null,

  {
    title: "PROJECTS",
    description:
      "Collaborative projects that allow students to apply their knowledge in real-world scenarios.",
    icon: <GiPodium className="size-12 text-[#4F9AD7]" />,
  },
  {
    title: "COMMUNITY",
    description:
      "A community of like-minded individuals who share a passion for AI.",
    icon: <LiaNewspaperSolid className="size-12 text-[#4F9AD7]" />,
  },
];

const OfferingCards = ({}) => {
  return (
    <section className="p-4">
      <h2
        className="font-[Montserrat
] text-4xl text-[#4F9AD7] text-center m-8"
      >
        We Offer...
      </h2>
      <div className="flex justify-center">
        <div className="inline-grid grid-cols-3 gap-4 w-auto">
          {Offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              title={offering?.title}
              icon={offering?.icon}
              description={offering?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingCards;
