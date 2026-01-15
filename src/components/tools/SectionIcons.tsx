"use client";

import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div<{ direction?: "row" | "column" }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: lightgray;
  gap: 30px;
  padding: 3px 8px;
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 10px 3px;
    flex-direction: ${({ direction }) => direction || "row"};
  }
  box-shadow: 0 0 10px 8px rgba(10, 10, 10, 0.2);
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90px;
  min-height: 100px;
`;

const IconLabel = styled.span`
  margin-top: 8px;
  font-size: 0.9rem;
  color: #000;
  line-height: 1.2;
  text-align: center;
`;

const IconLinkWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  text-align: center;
  gap: 2px;
  filter: grayscale(100%);
`;

interface SectionIconsArgs {
  icons: IconItem[];
  direction?: "row" | "column";
}

interface IconItem {
  name: string;
  id: string;
  Icon: React.ComponentType;
  path?: string;
}

const SectionIcons = ({ icons, direction = "row" }: SectionIconsArgs) => {
  const getIconWithText = ({ name, id, Icon }: IconItem) => {
    return (
      <IconWrapper key={id}>
        <Icon />
        <IconLabel>{name}</IconLabel>
      </IconWrapper>
    );
  };

  const getIconWithLink = ({ name, id, Icon, path }: IconItem) => {
    return (
      <IconLinkWrapper
        key={id}
        href={path}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
        <IconLabel>{name}</IconLabel>
      </IconLinkWrapper>
    );
  };

  return (
    <IconsContainer direction={direction}>
      {icons.map((icon) =>
        icon.path ? getIconWithLink(icon) : getIconWithText(icon)
      )}
    </IconsContainer>
  );
};

export default SectionIcons;
