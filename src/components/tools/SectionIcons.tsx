"use client";

import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  min-height: 100px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconLabel = styled.span`
  margin-top: 20px;
  font-size: 0.9rem;
  color: var(--primary-green);
  line-height: 1.2;
  text-align: center;
`;

interface SectionIconsProps {
  icons: {
    name: string;
    id: string;
    Icon: string;
  }[];
}

const SectionIcons = ({ icons }: SectionIconsProps) => {
  return (
    <IconsContainer>
      {icons.map(({ name, id, Icon }) => (
        <IconWrapper key={id}>
          <Icon />
          <IconLabel>{name}</IconLabel>
        </IconWrapper>
      ))}
    </IconsContainer>
  );
};

export default SectionIcons;
