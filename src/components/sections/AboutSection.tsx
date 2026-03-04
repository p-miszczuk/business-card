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
  max-width: 700px;
  margin: 0;
`;

const AboutSection = () => {
  return (
    <AboutSectionWrapper id="about">
      <SectionHeader title="About" />
      <AboutSectionText>
        I'm Peter — a frontend developer focused on React, TypeScript, and
        modern tooling like Next.js and Gatsby. I build responsive interfaces
        with CSS, SASS, Styled Components, and UI libraries such as Material-UI
        and Bootstrap. On the backend, I work with Node.js and Python, MongoDB
        and Firebase as databases — enough to build and integrate APIs and
        full-stack features, while steadily growing my backend skills.
      </AboutSectionText>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
