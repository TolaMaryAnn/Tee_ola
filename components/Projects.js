import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItems from "./ProjectItems";
import eva from "../public/assets/eva.png";
import clock from "../public/assets/clock.png";
import educamia from "../public/assets/educamia.jpg";
import footie from "../public/assets/footie.png";
import gt from "../public/assets/gt.jpg";
import portfolio from "../public/assets/portfolio.jpg";
import xibe from "../public/assets/xibe.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full font-[Raleway]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl font-bold tracking-widest uppercase text-[#c69c72]">
          Projects
        </p>
        <h2 className="py-4 text-xl">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Foot wears E-commerce"
            backgroundImg={footie}
            projectUrl="/Footie"
            tech="Html, Css, JavaScript"
          />

          <ProjectItems
            title="Clock"
            backgroundImg={clock}
            projectUrl="/Clock"
            tech="Javascript"
          />
          <ProjectItems
            title="E-learning"
            backgroundImg={educamia}
            projectUrl="/Educamia"
            tech="React JS"
          />
          <ProjectItems
            title="Portfolio"
            backgroundImg={portfolio}
            projectUrl="/Portfolio"
            tech="React JS"
          />

          <ProjectItems
            title="Fashion studio"
            backgroundImg={xibe}
            projectUrl="/Xibe"
            tech="React JS"
          />

          <ProjectItems
            title="Blog"
            backgroundImg={gt}
            projectUrl="/gadgetTech"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
