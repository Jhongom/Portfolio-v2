import React from 'react';
import Header from "./components/header/header.component";
import Banner from "./components/banner/banner.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Projects></Projects>
      <Skills></Skills>


    </div>
  );
}

export default App;
