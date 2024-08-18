import { PiBrainBold } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";

const CustomEvent = ({ event }) => {
  const Icon = event.icon === "brain" ? PiBrainBold : FaComputer;
  const startTime = event.start
    ? new Date(event.start).toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : "N/A";

  const endTime = event.end
    ? new Date(event.end).toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "N/A";

  return (
    <div className="font-playfair md:text-xs sm:text-[10px] text-[7px] flex justify-start bg-ai-blue-500 p-2 rounded-lg">
      <div className="relative flex items-center">
        <Icon className="text-inherit mr-1 absolute top-0.5" />
      </div>
      <div className="flex-1 ml-4">
        <div className="inline-flex items-start">{event.title}</div>
        <div className="mt-1 text-left">
          {!event.allDay && (
            <div>
              {startTime}-{endTime}- {event.location}
            </div>
          )}
          {event.allDay && <div>{event.location}</div>}
        </div>
      </div>
    </div>
  );
};

export default CustomEvent;
