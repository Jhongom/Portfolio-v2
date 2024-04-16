import './projects.styles.css';
import React, {useEffect, useState} from "react";

const Projects: React.FC  = () => {

  const [searchField, setSearchField] = useState('');
  const [languages, setLanguages] = useState([]);
  const [filteredLanguages, setFilteredLanguages] = useState(languages)

  useEffect(() => {
    async function getProjects(){
      const urlGitHub = "https://api.github.com/users/Jhongom/repos";
      const answer = await fetch(urlGitHub)
      const languages = await answer.json()

    }
  },[])

  return(
    <div></div>
  );


};

export default Projects;