import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  return (
    <div className="bg-primarybg min-h-screen">
      <Header />
      <br />
      <br />
      <div className="h-[50vh] flex items-center justify-center text-xl font-semibold">
        <EventCard />
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
