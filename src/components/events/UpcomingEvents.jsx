import Card from "./Card";

const UpcomingEvents = () => {
  return (
    <div className="p=4">
      <div className="text-4xl text-ai-blue-500 text-center m-8 font-medium">
        Upcoming Events
      </div>
      <div className="space-y-6">
        <Card
          month={"FEB"}
          day={"29"}
          hour={"7:00PM"}
          name={"Event Name"}
          location={"Location"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        />
        <Card
          month={"FEB"}
          day={"29"}
          hour={"7:00PM"}
          name={"Event Name"}
          location={"Location"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }
        />
      </div>
    </div>
  );
};

export default UpcomingEvents;
