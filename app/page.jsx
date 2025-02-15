import React from "react";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/event/event-list";
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />;
    </div>
  );
};

export default HomePage;
