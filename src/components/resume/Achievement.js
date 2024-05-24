import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
          title="FrontEnd Developer"
          subTitle="Web Design and Development (September'23-November'23)"
          result="Kolkata"
          des=" I Worked there as a frontend Developer where I had to manage everything regarding frontend including design the website."
        />
        <ResumeCard
          title="Frntend Engineer"
          subTitle="Frontend Developer Team - (April'22-June'22)"
          result="Delhi"
          des="It's Travel management website where I mainly worked in frontend design "
        />
        <ResumeCard
          title="Full Stack Developer"
          subTitle="Mern Developer (2021-2022)"
          result="WFO"
          des="It's full stack website regarding college information and carrier counselling"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FrontEnd Developer"
            subTitle="Web Design and Development (September'23-November'23)"
            result="Kolkata"
            des=" I Worked there as a frontend Developer where I had to manage everything regarding frontend including design the website."
          />
          <ResumeCard
            title="Frntend Engineer"
            subTitle="Frontend Developer Team - (April'22-June'22)"
            result="Delhi"
            des="It's Travel management website where I mainly worked in frontend design "
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Mern Developer (2021-2022)"
            result="WFO"
            des="It's full stack website regarding college information and carrier counselling specially after 12th"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
