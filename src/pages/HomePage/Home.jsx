import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";
import { WorkData } from "../../data/WorkData";
import { motion } from "framer-motion";

import {
  ContactBtn,
  PageHeader,
  SkillsIntro,
  CTABtn,
  Intro,
  Nav,
  SectionTitle,
  WorkCard,
  AboutText,
  SocialConnect,
  ContactEmail,
  FooterNav,
  SkillsBox,
} from "../../components";

const Home = () => {
  const WCard = WorkData.map((work) => {
    return <WorkCard key={work.id} work={work} />;
  });

  return (
    <>
      <motion.div
        className="page"
        exit={{ x: "-100vw" }}
        transition={{ ease: "easeInOut" }}
      >
        <div className="head-wrap" id="home">
          <Nav />
          <div className="head">
            <PageHeader />
            <SkillsIntro />
          </div>
        </div>
        <div className="container">
          <section className="intro">
            <ContactBtn />
            <Intro />
            <div className="resume-btn-wrap">

{

<a href='mailto:coorylt@gmail/com' className="link">
      <svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' className="link__svg" aria-labelledby="link1-title">
        <title id="link1-title">Come quick and click this</title>
    <path id="link-circle" className="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />

    <path className="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="none" />

    <text className="link__text">
      <textPath href="#link-circle" stroke="none">
        Come quick and click this
      </textPath>
    </text>
  </svg>
</a>


/* 
  

              <section className="animate-button">
              <a href="#" class="link">
              	<svg viewBox='0 0 200 200' width='200' height='200' xmlns='http://www.w3.org/2000/svg' class="link__svg" aria-labelledby="link1-title link1-desc">
	        	      <title id="link1-title">Come quick and click this</title>
	                <path id="link-circle" class="link__path" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" stroke="none" fill="none" />
	                <path class="link__arrow" d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"  fill="none" />
            		  <text class="link__text">
	                <textPath href="#link-circle" stroke="none">
		              	Come quick and click this
                  	</textPath>
	                  </text>
	                </svg>
                </a>
              </section> */}




              {/* <CTABtn
                text="Resume"
                link=""
                padding="clamp(8px, 2px + 1vw, 10px)"
                width="clamp(120px, 90px + 10vw ,220px)"
              /> */}
            </div>
          </section>
          {/* section for show my projects */}
          {/* <section className="work" id="work">
            <SectionTitle title="Selected Works :" />
            <div className="projects-wrap">{WCard}</div>
          </section> */}
          <section className="skills">
            <article>
              <SectionTitle title="My_ Skills" />
            </article>
            <SkillsBox />
          </section>
          <section className="about" id="about">
            <article>
              <SectionTitle title="About Me and _Myself :" />
            </article>
            <div>
              <AboutText />
              <SocialConnect dim="clamp(20px, 18px + 5vw, 55px)" />
            </div>
          </section>
          <section className="contact" id="connect">
            <article>
              <SectionTitle
                title="Let's Have a Talk !"
                fontSize="clamp(36px, 20px + 7vw, 80px)"
              />
            </article>
            <ContactEmail />
            <footer>
              <SocialConnect dim="25px" size="15px" />
              <div className="footer-content">
                <FooterNav />
              </div>
            </footer>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
