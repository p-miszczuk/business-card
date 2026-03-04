"use client";

import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div<{
  direction?: "row" | "column";
  transparentBackground?: boolean;
  iconGap?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ iconGap }) => iconGap || "var(--spacing-lg)"};
  padding: var(--spacing-md);
  background-color: ${({ transparentBackground }) =>
    transparentBackground ? "transparent" : "var(--background-elevated)"};
  border-radius: var(--radius-md);

  @media (min-width: 768px) {
    flex-direction: ${({ direction }) => direction || "row"};
    gap: ${({ iconGap }) => iconGap || "var(--spacing-xl)"};
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 72px;
`;

const IconLabel = styled.span`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--text-muted);
  text-align: center;
  line-height: 1.2;
`;

const IconLinkWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: inherit;
  transition: transform var(--transition-fast);

  &:hover {
    transform: translateY(-2px);

    ${IconLabel} {
      color: var(--accent-primary);
    }
  }
`;

interface SectionIconsArgs {
  icons: IconItem[];
  direction?: "row" | "column";
  transparentBackground?: boolean;
  iconGap?: string;
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
  iconGap,
}: SectionIconsArgs) => {
  const getIconWithText = ({ name, id, Icon }: IconItem) => (
    <IconWrapper key={id}>
      <IconBox>
        <Icon />
      </IconBox>
      <IconLabel>{name}</IconLabel>
    </IconWrapper>
  );

  const getIconWithLink = ({ name, id, Icon, path }: IconItem) => (
    <IconLinkWrapper
      key={id}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBox>
        <Icon />
      </IconBox>
      <IconLabel>{name}</IconLabel>
    </IconLinkWrapper>
  );

  return (
    <IconsContainer
      direction={direction}
      transparentBackground={transparentBackground}
      iconGap={iconGap}
    >
      {icons.map((icon) =>
        icon.path ? getIconWithLink(icon) : getIconWithText(icon)
      )}
    </IconsContainer>
  );
};

export default SectionIcons;
