import Introduction from "@/components/landing/Introduction";
import Information from "@/components/landing/Information";
import OfferingCards from "@/components/landing/OfferingCards";
import CalendarEvent from "@/components/calendar/Calendar";

const Home = () => {
  return (
    <>
      <CalendarEvent></CalendarEvent>
      <Introduction />
      <Information />
      <OfferingCards />
    </>
  );
};

export default Home;
