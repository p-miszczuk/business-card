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
  min-height: 300px;
  padding-bottom: 20px;
  background-color: silver;
`;

const StackSection = () => {
  return (
    <StackSectionContainer>
      <SectionHeader title="Stack" color="green" />
      <SectionIcons icons={FRONTEND_STACK} />
      <SectionIcons icons={BACKEND_STACK} />
    </StackSectionContainer>
  );
};

export default StackSection;
