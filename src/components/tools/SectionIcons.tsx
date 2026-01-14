"use client";

import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  min-height: 100px;
`;

const IconLabel = styled.span`
  margin-top: 20px;
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
  gap: 5px;
`;

interface SectionIconsArgs {
  icons: IconItem[];
}

interface IconItem {
  name: string;
  id: string;
  Icon: React.ComponentType;
  path?: string;
}

const SectionIcons = ({ icons }: SectionIconsArgs) => {
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
    <IconsContainer>
      {icons.map((icon) =>
        icon.path ? getIconWithLink(icon) : getIconWithText(icon)
      )}
    </IconsContainer>
  );
};

export default SectionIcons;
