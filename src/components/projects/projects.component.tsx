import './projects.styles.css';
import React, {useEffect, useState} from "react";
import CardProjectList from "../card-project-list/card-project-list.component";

export type Project = {
  id : number;
  name : string;
  description : string;
  language : string;
};

const Projects: React.FC  = () => {

  const [projects, setProjets] = useState<Project[]>([])

  useEffect(() => {
    async function getProjects(){
      const urlGitHub = "https://api.github.com/users/Jhongom/repos";
      const answer = await fetch(urlGitHub)
      const projectData = await answer.json()
      setProjets(projectData);
    }
    getProjects();
  },[])

  return(
    <div className="pro_container">
      <h1>Github projects</h1>
      <CardProjectList projects={projects}/>
    </div>
  );


};

export default Projects;