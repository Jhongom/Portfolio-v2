import "./card-project.styles.css"
import React from "react";
import gitHubImg from"../../assets/icons/github-character (1).png"
import folder from "../../assets/icons/folder-black-24.svg"
import {Project} from "../projects/projects.component";
interface CardProjectProps {
  project: Project;
}

const CardProyect: React.FC<CardProjectProps> = ({project}) => {
  const {id, name, description, language} = project;

  return (
    <div className="card-container">
      <img src={gitHubImg} alt="github" className="img-github"/>
      <div className="info-container">
        <p className="title-card-project"> <span className="spam-card-folder"> <img className="folder-card-project" src={folder} alt="folder"/> </span>
          {name}
        </p>
        <p className="description-card-project">Description: {description}</p>
        <p className="language-card-project">Language: {language}</p>
      </div>
    </div>
  );


}

export default CardProyect;