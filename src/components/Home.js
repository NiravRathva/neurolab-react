import React from "react";
import Contact from "./Contact";
import ContactList from "./ContactList";

const Home = () => {
  return (
    <div className="container">
      <Contact />
      <ContactList />
    </div>
  );
};

export default Home;
