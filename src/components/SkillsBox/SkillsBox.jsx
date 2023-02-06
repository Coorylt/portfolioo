import React from "react";
import "./style.css";
const SkillsBox = () => {
  const Skills = {
    WebSkills: [
      "HTML-CSS",
      "JavaScript",
      "React",
      "React-Router-Dom",
      "Wordpress",
      "SQL",
      "Python",
      "Php",
      "Bash",
      "GIT and GitHub",
    ],
    CompetetiveSkills: ["Photoshop","Illustrator","Premiere Pro","Lightroom","InDesign"],
    Extras: ["Linux", "Blender", "VScode", "Adobe Suits", "Figma"],
  };

  return (
    <>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <h3>As Web-Developer</h3>
          <ul>
            {Skills.WebSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Graphic Design</h3>
          <ul>
            {Skills.CompetetiveSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Extras</h3>
          <ul>
            {Skills.Extras.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsBox;
