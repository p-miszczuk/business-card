import React from "react";
import styled from "styled-components";
import SectionHeader from "../ui/SectionHeader";

const AboutSectionWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: var(--background-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 10px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(88, 166, 255, 0.25) 30%,
      rgba(88, 166, 255, 0.7) 50%,
      rgba(88, 166, 255, 0.25) 70%,
      transparent 100%
    );
    border-radius: 0 0 50% 50%;
    filter: blur(4px);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-md);
  }
`;

const AboutSectionText = styled.p`
  font-size: var(--font-size-large);
  line-height: 1.75;
  color: var(--text-secondary);
  text-align: center;
  max-width: 560px;
  margin: 0;
`;

const AboutSection = () => {
  return (
    <AboutSectionWrapper id="about">
      <SectionHeader title="About" />
      <AboutSectionText>
        Hi, my name is Peter. I am a frontend developer creating comprehensive
        internet applications. I specialize in React, Node.js, CSS, HTML, and
        other modern technologies to build responsive and user-friendly web
        solutions.
      </AboutSectionText>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
