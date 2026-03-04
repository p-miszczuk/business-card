import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-primary);
  margin: 0 0 var(--spacing-lg);
`;

const SectionHeader = ({ title }: { title: string; color?: string }) => {
  return <Header>{title}</Header>;
};

export default SectionHeader;
