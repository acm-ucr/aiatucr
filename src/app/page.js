import Introduction from "@/components/landing/Introduction";
import Information from "@/components/landing/Information";
import OfferingCards from "@/components/landing/OfferingCards";

const Home = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Introduction />
      <Information />
      <OfferingCards />
    </div>
  );
};

export default Home;
