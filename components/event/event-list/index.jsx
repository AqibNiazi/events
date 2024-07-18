import React from "react";
import EventItem from "../event-item";

const EventList = ({ items }) => {
  return (
    <ul>
      {items?.map((event) => (
        <EventItem
          key={event?.id}
          title={event?.title}
          location={event?.location}
          image={event?.image}
          date={event?.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
