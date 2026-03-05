"use client";

import React from "react";
import styled from "styled-components";

const IconsContainer = styled.div<{
  $direction?: "row" | "column";
  $transparentBackground?: boolean;
  $iconGap?: string;
}>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ $iconGap }) => $iconGap || "var(--spacing-lg)"};
  padding: var(--spacing-md);
  background-color: ${({ $transparentBackground }) =>
    $transparentBackground ? "transparent" : "var(--background-elevated)"};
  border-radius: var(--radius-md);

  @media (min-width: 768px) {
    flex-direction: ${({ $direction }) => $direction || "row"};
    gap: ${({ $iconGap }) => $iconGap || "var(--spacing-xl)"};
  }
`;

const IconBox = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-fast);

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  min-width: 72px;
`;

const Toast = styled.div`
  position: absolute;
  bottom: calc(100% + var(--spacing-sm));
  left: 50%;
  transform: translateX(-50%);
  padding: var(--spacing-lg) var(--spacing-xl);
  background: var(--background-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--font-size-small);
  line-height: 1.5;
  color: var(--text-secondary);
  width: max-content;
  max-width: min(480px, calc(100vw - 2rem));
  white-space: normal;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-fast);
  z-index: 50;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const IconWrapperWithToast = styled.div`
  position: relative;

  &:hover ${Toast} {
    opacity: 1;
  }

  &:hover ${IconBox} {
    transform: scale(1.12);
  }
`;

const IconLabel = styled.span`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--text-muted);
  text-align: center;
  line-height: 1.2;
`;

const IconLinkWrapper = styled.a`
  position: relative;
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

    ${IconBox} {
      transform: scale(1.12);
    }
  }

  &:hover ${Toast} {
    opacity: 1;
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
  desc?: string;
}

const SectionIcons = ({
  icons,
  direction = "row",
  transparentBackground = false,
  iconGap,
}: SectionIconsArgs) => {
  const getIconWithText = ({ name, id, Icon, desc }: IconItem) => (
    <IconWrapper key={id}>
      <IconWrapperWithToast>
        <IconBox>
          <Icon />
        </IconBox>
        {desc && <Toast>{desc}</Toast>}
      </IconWrapperWithToast>
      <IconLabel>{name}</IconLabel>
    </IconWrapper>
  );

  const getIconWithLink = ({ name, id, Icon, path, desc }: IconItem) => (
    <IconLinkWrapper
      key={id}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBox>
        <Icon />
      </IconBox>
      {desc && <Toast>{desc}</Toast>}
      <IconLabel>{name}</IconLabel>
    </IconLinkWrapper>
  );

  return (
    <IconsContainer
      $direction={direction}
      $transparentBackground={transparentBackground}
      $iconGap={iconGap}
    >
      {icons.map((icon) =>
        icon.path ? getIconWithLink(icon) : getIconWithText(icon),
      )}
    </IconsContainer>
  );
};

export default SectionIcons;
