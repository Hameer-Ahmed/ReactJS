// import React from "react";
import "./Home.css";
import { people } from "../../utils/CardsDetails/CardDetails";
import Card from "../Common/Cards/Card";

const Home = () => {
  return (
    <div className="Home">
      <div className="allCards">
        {people.map((person) => {
          return <Card key={person.id} person={person} />;
        })}
      </div>
    </div>
  );
};

export default Home;
