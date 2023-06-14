import React from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Tola | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[60px]  font-[Raleway] ">
        <h2 className="text-center text-3xl sm:text-4xl">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center text-3xl sm:text-4xl">
            Tola MaryAnn Ojegbile
          </h2>
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/ojegbile-maryann-omotola-59ab91227/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </Link>
            <Link
              href="https://github.com/TolaMaryAnn"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies. Front-End Developer with a
          proven ability to collaborate effectively with senior developers while
          spending extra time to be mentored. Enjoy working closely with team
          members to ensure workloads are effectively redirected to bottlenecks
          and personally picking up the slack when necessary. With a passion for
          both personal growth and for software development, I learn new
          languages while sharpening existing skills. Ready to apply my passion
          for coding to a talented engineering team to develop quality
          solutions.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2 font-bold text-[#c69c72]">
            Skills
          </h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span>Sass
            <span className="px-2">|</span>BootStrap
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> Framer-Motion
            <span className="px-2">|</span> Styled-Components
            <span className="px-2">|</span> Github
            <span className="px-2">|</span> Git
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4  font-bold text-[#c69c72]">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">BORROWLITE</span>
            <span className="px-2">|</span>Jos, Plateau State.
          </p>
          <p className="py-1 italic">
            Junior Front-End Developer (March 2022 - July 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Worked with ReactJs.</li>
            <li>
              Worked in an agile environment with weekly stand-ups, kept track
              of user stories/bugs in GitHub projects, and conducted 2 hours of
              sprint planning and sprint retrospectives per week.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Participated in pair programmed with 2 engineers, and reviewed
              team’s code to provide additional perspective and catch previously
              missed errors.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">YENEXPRESS</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Front-End Developer (Apirl 2023 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and implemented web applications along with 3rd-party
              software integrations as a web team liaison for all
              inter-departmental and customer-facing projects.
            </li>
            <li>
              Implemented AWS to allow easy iteration in company cloud
              infrastructure.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>Learned and applied Agile methodologies and principles.</li>
            <li>Worked with Reacjs and TailwindCss</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">LEAGUE OF SHOGUNS</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">
            Front-End Developer (Feburary 2023 - April 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed membership, event, and legal platform technology
              solutions, and automated internal processes.
            </li>
            <li>
              Worked with Quality Assurance to get new pages/products tested,
              and addressed any issues within 48 hours.
            </li>
            <li>
              Participated in the initial wave of developers learning and
              implementing the React.JS framwork.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>Learned and applied Agile methodologies and principles.</li>
            <li>Worked with Nextjs and TailwindCss</li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4  font-bold text-[#c69c72]">
          Other Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">KSH FOUNDATION</span>
            <span className="px-2">|</span>Abuja
          </p>
          <p className="py-1 italic">An EveryGirl Fellow (2022 – Till date)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Mentoring and Equipping Young ladies in Tech.</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">YENBYENS FELLOWSHIP</span>
            <span className="px-2">|</span>Abuja
          </p>
          <p className="py-1 italic">An Yenbyen Fellow (2021 – 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Mentoring and Equipping Young ladies in Tech.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
