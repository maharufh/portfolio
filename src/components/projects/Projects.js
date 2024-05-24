import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
           title="College Chitta "
          des=" This is a career consultant organization. Here we provide Career guidance,
           counseling for Engineering and Medical.
           We provide the best college according to their rank and cutoff.
            The Future of Education is here"
          src={projectOne}
        />
        <ProjectsCard
          title="Personal Blog"
          des="  Here we provide news or information regarding  the latest technology, stack which are using by big
          startup and MNC's. We also publish about job's market news"
          src={projectTwo}
        />
        <ProjectsCard
          title="Carrier Councelling platform"
          des=" People will get informatin regrding their carrier. If they don't 
          know what carrier they should choose to success in life"
          src={projectThree}
        />
        <ProjectsCard
          title="Rabina's Kitchen"
          des=" This is a cloud kitchen cum restaurant website . Where people
          can order different type of home made foods also at the night time they
          can eat at the restaurant"
          src={projectThree}
        />
        <ProjectsCard
          title="Personal Spotify"
          des=" I build this project with my personal favourite songs list
          So that that I can avoid the spotify premium"
          src={projectOne}
        />
        <ProjectsCard
          title="Github Profile Finder"
          des=" Any one can search any name in the search bar and all the 
          account made in that name will appear int the display. "

          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects
