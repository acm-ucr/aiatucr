import OfferingCard from "./OfferingCard";
import { offerings } from "@/data/Offerings";

const OfferingCards = () => {
  return (
    <section className="p-4">
      <p className="text-4xl text-ai-blue-500 text-center m-8">We Offer...</p>
      <div className="flex justify-center">
        <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-8 w-auto place-items-center">
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
