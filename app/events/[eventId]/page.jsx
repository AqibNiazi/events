"use client";
import React, { Fragment } from "react";
import { useParams } from "next/navigation";
import { getEventById } from "@/dummy-data";
import EventSummary from "@/components/event/event-summary";
import EventLogistics from "@/components/event/event-logistics";
import EventContent from "@/components/event/event-content";
const EventDetailPage = () => {
  const { eventId } = useParams();
  const event = getEventById(eventId);
  if (!event) {
    return <p>No Events Found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event?.title} />
      <EventLogistics
        date={event?.date}
        address={event?.location}
        image={event?.image}
        imageAlt={event?.title}
      />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
