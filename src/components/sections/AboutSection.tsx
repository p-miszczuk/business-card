import VisualElement from "./VisualElement";
import React from "react";
import styled from "styled-components";
import SectionHeader from "../ui/SectionHeader";

const AboutSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 400px;
  background: linear-gradient(
    to bottom,
    var(--primary-green),
    var(--secondary-green)
  );
  margin-bottom: 250px;
  &::before {
    content: "";
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 200px;
    height: 100px;
    background: url("/images/computer.svg") no-repeat center center;
    background-size: contain;
    opacity: 0.2;
    pointer-events: none;
    z-index: 0;
  }
`;

const AboutSectionText = styled.p`
  font-size: var(--font-size-large);
  color: var(--text-color);
  text-align: center;
  max-width: 1000px;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: var(--font-size-medium);
  }
`;

const AboutSection = () => {
  return (
    <>
      <AboutSectionWrapper id="about">
        <SectionHeader title="About" />
        <AboutSectionText>
          Hi, my name is Peter. I am a web developer creating comprehensive
          internet applications. I specialize in React, Node.js, CSS, HTML, and
          other modern technologies to build responsive and user-friendly web
          solutions.
        </AboutSectionText>
        <VisualElement
          sectionHeight={250}
          topPosition={400}
          topImagePosition={500}
          id="about"
        />
      </AboutSectionWrapper>
    </>
  );
};

export default AboutSection;
