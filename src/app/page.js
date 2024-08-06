import Introduction from "@/components/landing/Introduction";
import Information from "@/components/landing/Information";
import OfferingCards from "@/components/landing/OfferingCards";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Introduction />;<Header></Header>
      <Information />;
      <OfferingCards />;
    </>
  );
};

export default Home;
