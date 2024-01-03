import React from "react";
import { EventList } from "../helpers/EventList";
import EventItem from "../Componets/eventItem"
import "../styles/Event.css";

function Events() {
  return (
    <div className="event">
      <h1 className="eventTitle">Our Events</h1>
      <div className="eventList">
        {EventList.map((eventItem, key) => {
          return (
            <EventItem
              key={key}
              image={eventItem.image}
              name={eventItem.name}
              />
          );
        })}
      </div>
    </div>
  );
}

export default Events;