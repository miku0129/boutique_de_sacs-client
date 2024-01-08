import { Fragment } from "react";

import { ContentLayout } from "../../utilities/components.styles";
import "./about.style.scss";

const About = () => {
  return (
    <Fragment>
      <ContentLayout className="about-content-layout">
        <div className="about-img-container">
          <img className="about-img" src="https://images.unsplash.com/photo-1501644898242-cfea317d7faf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bio"/>
        </div>
        <div className="about-text-container">
          <p>
            Mon parcours créatif a commencé en 2013. C'est cette année-là que
            j'ai découvert le monde des "sacs et paniers". Cette matière douce
            et tactile est devenue l'un de mes moyens d'exprimer ma créativité.
          </p>
          <p>
            Autodidacte et passionnée, je me laisse guider par l'inspiration et
            reste toujours fidèle à la fibre.
          </p>
          <p>
            En utilisant des méthodes traditionnelles, je découvre les aspects
            de cette belle matière en la transformant en objets décoratifs et
            fonctionnels tels que des sacs et des paniers.
          </p>
        </div>
      </ContentLayout>
    </Fragment>
  );
};

export default About;
