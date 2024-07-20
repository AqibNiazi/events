import React from "react";
import styles from "./event.module.css";
import { BsCalendar2Date } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

import Button from "@/components/ui/button";
const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  console.log("Explore Link", exploreLink);
  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.date}>
          <BsCalendar2Date />
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <CiLocationOn />
          <address>{formattedAddress}</address>
        </div>

        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <FaArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
