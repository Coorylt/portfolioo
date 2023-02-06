import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
       Junior web developer. I am also passionate about design and photography. Currently at PopSchool,
        I would like to join the EPSI of Lille in cooperative training course.<br />
      
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I am Programming enthusiast and fullstack Web developer with a preference for the FrontEnd.
        <br />
        <br />      
        Currently training Web / Mobile Developer at PopSchool in Lens. 
        My passion for IT makes me want to pursue this path in higher school.
        {}
        <br />
        <br />I love exploring different kind of fields so I do photography, graphic design and video creation.<br>
        </br>
        <a href='https://youtu.be/OgXyU8lxMNY' target="_blank" style={style}>
        Here</a> {""}
        you can see a video I made. 
        <br />
       <br />
        At last, Feel free to{" "}
        <a href="mailto:coorylt@gmail.com"style={style}>
          Contact ME.
        </a>{" "}
      </p>
    </>
  );
};
