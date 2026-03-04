"use client";

import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div<{
  direction?: "row" | "column";
  transparentBackground?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ transparentBackground }) =>
    transparentBackground ? "transparent" : "lightgray"};
  gap: 5px;
  padding: 3px 8px;
  box-shadow: ${({ transparentBackground }) =>
    transparentBackground ? "none" : "0 0 10px 8px rgba(10, 10, 10, 0.2)"};
  @media (min-width: 768px) {
    padding: 10px 3px;
    flex-direction: ${({ direction }) => direction || "row"};
  }
  @media (min-width: 1024px) {
    gap: 10px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  min-height: 100px;
  transform: scale(0.8);
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
  transparentBackground?: boolean;
}

interface IconItem {
  name: string;
  id: string;
  Icon: React.ComponentType;
  path?: string;
}

const SectionIcons = ({
  icons,
  direction = "row",
  transparentBackground = false,
}: SectionIconsArgs) => {
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
    <IconsContainer
      direction={direction}
      transparentBackground={transparentBackground}
    >
      {icons.map((icon) =>
        icon.path ? getIconWithLink(icon) : getIconWithText(icon),
      )}
    </IconsContainer>
  );
};

export default SectionIcons;
