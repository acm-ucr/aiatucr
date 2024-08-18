"use client";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import CustomHeader from "./CustomHeader.jsx";
import Modal from "./Modal.jsx";
import Events from "../events/Events.jsx";
import { motion } from "framer-motion";

const localizer = momentLocalizer(moment);

const CalendarEvent = () => {
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  const animation = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockEvents = [
          {
            title: "Test Event 1",
            start: new Date(2024, 7, 13, 14, 0), // Aug 13, 2024, 14:00
            end: new Date(2024, 7, 13, 15, 0), // Aug 13, 2024, 15:00
            location: "WCH",
            allDay: true,
          },
          {
            title: "Test Event 2",
            start: new Date(2024, 7, 14, 10, 0), // Aug 14, 2024, 10:00
            end: new Date(2024, 7, 14, 11, 0), // Aug 14, 2024, 11:00
            location: "WCH",
            allDay: false,
          },
        ];

        setEvents(mockEvents);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className="md:w-1/2 w-2/3 flex justify-center items-center flex-col mt-[2vh]">
        <motion.div
          className="w-full flex justify-center items-center"
          variants={animation}
          transition={{ delay: 0.2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex justify-center h-[90vh] sm:h-[60vh] w-full font-righteous relative">
            <Calendar
              date={date}
              className="w-full m-0 p-0 text-md md:text-2xl flex justify-center overflow-hidden"
              allDayAccessor="allDay"
              showAllEvents={true}
              events={events}
              localizer={localizer}
              defaultView="month"
              views={["month"]}
              components={{
                event: CustomEvent,
                toolbar: CustomToolbar,
                header: CustomHeader,
              }}
              onNavigate={(newDate) => {
                setDate(newDate);
              }}
              dayPropGetter={(event) => {
                return {
                  className: `${
                    new Date(event).toLocaleDateString() ===
                    new Date().toLocaleDateString()
                      ? "!bg-opacity-80"
                      : "!bg-transparent"
                  }`,
                  style: {
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                };
              }}
              eventPropGetter={() => {
                return {
                  className:
                    "p-0 m-0 !active:ring-0 !focus:outline-0 !bg-black -translate-y-2 h-5",
                };
              }}
              onSelectEvent={(event) => setEvent(event)}
            />
          </div>
          {event && <Modal event={event} setEvent={setEvent} />}
        </motion.div>
      </section>
      <Events events={events} />
    </div>
  );
};

export default CalendarEvent;
