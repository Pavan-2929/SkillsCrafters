import React from "react";
import Accordion from "../Components/Accordion";
import Features from "../Components/features";

function About() {
  const accordionItems = [
    {
      title: "Know more about our company and our courses",
      content:
        "Welcome to our company's about page. Learn more about who we are and the courses we offer.",
    },
    {
      title: "Our Mission",
      content:
        "At our company, we are dedicated to providing high-quality education and helping individuals achieve their learning goals. Our mission is to empower students with the knowledge and skills they need to succeed in their careers.",
    },
    {
      title: "Our Courses",
      content:
        "Explore our diverse range of courses designed to meet the needs of students at various skill levels. Whether you are a beginner looking to start a new journey or an experienced professional seeking to enhance your skills, we have courses tailored for you.",
    },
    {
      title: "Why Choose Us",
      content: (
        <ul className="list-disc list-inside text-[#CCC]">
          <li>Experienced and dedicated instructors</li>
          <li>Interactive and engaging learning environment</li>
          <li>Flexible course options to fit your schedule</li>
          <li>Hands-on projects and real-world applications</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto sm:p-16 p-4">
        <Accordion items={accordionItems} />
      <div className="mt-14">
      <Features/>

      </div>
      </div>
    </div>
  );
}

export default About;
