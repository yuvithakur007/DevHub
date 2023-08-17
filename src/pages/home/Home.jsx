import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, gigs, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              DevHub <i>business</i>
            </h1>    
            <div className="title">
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button onClick={gigs} >Explore DevHub Business</button>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
