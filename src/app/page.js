import OfferingCard from "@/components/landing/OfferingCard";
import { FaUserAlt } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";
import { GiPodium } from "react-icons/gi";
import { LiaNewspaperSolid } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <section className="p-4">
        <h2
          className="font-[Montserrat
] text-4xl text-[#4F9AD7] text-center m-8"
        >
          We Offer...
        </h2>
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-3 gap-4 w-auto">
            <OfferingCard
              title="SEMINARS"
              icon={<FaUserAlt className="size-12 text-[#4F9AD7]" />}
              description="In-depth seminars offering insight into AI's latest technologies and advancements."
            />
            <OfferingCard
              title="GUEST SPEAKERS"
              icon={<RiPresentationFill className="size-12 text-[#4F9AD7]" />}
              description="Engaging sessions with AI experts, industry professionals, and prominent researchers."
            />
            <div></div>
            <div></div>
            <OfferingCard
              title="PROJECTS"
              icon={<GiPodium className="size-12 text-[#4F9AD7]" />}
              description="Collaborative projects that allow students to apply their knowledge in real-world scenarios."
            />
            <OfferingCard
              title="COMMUNITY"
              icon={<LiaNewspaperSolid className="size-12 text-[#4F9AD7]" />}
              description="A community of like-minded individuals who share a passion for AI."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
