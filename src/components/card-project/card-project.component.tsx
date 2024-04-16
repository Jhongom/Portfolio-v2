import "./card-project.styles.css"
import React from "react";
import gitHubImg from"../../assets/icons/github-character (1).png"
import folder from "../../assets/icons/folder-black-24.svg"
interface CardProjectProps {
  project:{
    id : number;
    name : string;
    description : string;
    language : string;
  };
}

const CardProyect: React.FC<CardProjectProps> = ({project}) => {
  const {id, name, description, language} = project;

  return (
    <div className="card-container">
      <img src={gitHubImg} alt="github" className="img"/>
      <div className="info-container">
        <p> <span> <img src={folder} alt="folder"/> </span>
          {name}
        </p>
        <p>{description}</p>
        <p>{language}</p>
      </div>
    </div>
  );


}

export default CardProyect;