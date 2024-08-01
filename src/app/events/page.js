import UpcomingEvents from "@/components/events/UpcomingEvents";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header text={"EVENTS"} />
      <UpcomingEvents />
    </>
  );
};

export default Page;
