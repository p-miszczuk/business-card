import { FRONTEND_STACK, BACKEND_STACK } from "../../utils/stack";
import React from "react";
import styled from "styled-components";
import SectionIcons from "../tools/SectionIcons";
import SectionHeader from "../ui/SectionHeader";

const StackSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: silver;
  border-radius: 8px;
  box-shadow: 0 0 10px 8px rgba(10, 10, 10, 0.2);
`;

const StackSection = () => {
  return (
    <StackSectionContainer>
      <SectionHeader title="Stack" color="green" />
      <SectionIcons icons={FRONTEND_STACK} transparentBackground />
      <SectionIcons icons={BACKEND_STACK} transparentBackground />
    </StackSectionContainer>
  );
};

export default StackSection;
