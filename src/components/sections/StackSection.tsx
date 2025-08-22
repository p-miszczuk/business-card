import { FRONTEND_STACK, BACKEND_STACK } from "../../utils/stack";
import React from "react";
import styled from "styled-components";
import SectionIcons from "../tools/SectionIcons";
import VisualElement from "./VisualElement";

const StackSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  padding-bottom: 20px;
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
      <SectionIcons icons={FRONTEND_STACK} />
      <StackSectionHeader>Backend</StackSectionHeader>
      <SectionIcons icons={BACKEND_STACK} />
    </StackSectionContainer>
  );
};

export default StackSection;
