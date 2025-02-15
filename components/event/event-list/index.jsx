import React from "react";
import EventItem from "../event-item";
import styles from "./event-list.module.css";
const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items?.map((event) => (
        <EventItem
          key={event?.id}
          id={event?.id}
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
