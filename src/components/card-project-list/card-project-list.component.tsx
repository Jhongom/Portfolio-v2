import "./card-project-list.styles.css"
import React from "react";
import CardProyect from "../card-project/card-project.component";
import {Project} from "../projects/projects.component";

type CardListProps = {
  projects: Project[];
};
const CardProjectList= ({ projects }: CardListProps) => (
  <div className='card-list'>
    {projects.map((project) => {
      return <CardProyect key={project.id} project={project}/>;
    })}
  </div>
);

export default CardProjectList;