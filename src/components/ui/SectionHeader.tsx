import React from "react";
import styled from "styled-components";

const Header = styled.h2<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color || "white"};
  font-family: "Courier New", Courier, monospace;
`;

const SectionHeader = ({ title, color }: { title: string; color?: string }) => {
  return <Header color={color}>{title}</Header>;
};

export default SectionHeader;
