import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionHeader = ({ title }: { title: string }) => {
  return <Header>{title}</Header>;
};

export default SectionHeader;
