import React from "react";
import styled from "styled-components";
import SectionIcons from "../tools/SectionIcons";

const StackSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  background-color: white;
`;

const StackSectionHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary-green);
`;

const StackSection = () => {
  return (
    <StackSectionContainer>
      <StackSectionHeader>Stack</StackSectionHeader>
      <SectionIcons />
    </StackSectionContainer>
  );
};

export default StackSection;
