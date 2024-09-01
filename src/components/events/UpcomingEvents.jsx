import Calendar from "@/components/calendar/Calendar";

const UpcomingEvents = () => {
  return (
    <div className="p-4">
      <div className="text-4xl text-ai-blue-500 text-center m-8 font-semibold font-montserrat">
        Upcoming Events
      </div>
      <Calendar />
    </div>
  );
};

export default UpcomingEvents;
