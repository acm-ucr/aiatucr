import OfferingCard from "./OfferingCard";
import { offerings } from "@/data/Offerings";

const OfferingCards = () => {
  return (
    <section className="h-fit p-4">
      <p className="text-4xl text-ai-blue-500 text-center m-8">We Offer...</p>
      <div className="flex justify-center">
        <div className="w-full flex flex-col p-4 items-start space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
          {offerings.map((offering, index) => (
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
