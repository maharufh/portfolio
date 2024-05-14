import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Developer"
          des="Seamlessly integrate innovative design concepts with cutting-edge
           frontend technologies to create visually stunning and highly functional
            user interfaces, optimizing user engagement and satisfaction."
         
        />
        <Card
          title="Web Designer"
          des=" Blend my flair for creativity with technical expertise to
           craft captivating and intuitive website designs, ensuring
            seamless user experiences and brand coherence across digital platforms."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Software Engineer"
          des=" Leverage my coding prowess and problem-solving skills
           to architect robust and scalable software solutions,
            contributing to the entire software development lifecycle 
            and delivering high-quality products that meet client needs."
          icon={<SiProgress />}
        />
        <Card
          title="Analytical Engineer"
          des="Harness advanced data analysis techniques and engineering 
          principles to extract actionable insights from complex datasets, empowering businesses to
           make informed decisions and drive strategic growth initiatives."
          icon={<FaMobile />}
        />
        <Card
          title="Testing Engineer"
          des="Apply meticulous testing methodologies and tools to rigorously 
          evaluate software quality and performance, identifying and rectifying 
          issues to ensure the delivery of reliable and flawless applications."
          icon={<SiAntdesign />}
        />
        <Card
          title="Business Analyst"
          des="Utilize my analytical acumen and domain knowledge to 
          analyze business processes, gather requirements, and propose
           strategic solutions that optimize operational efficiency, 
          foster innovation, and drive organizational success."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features