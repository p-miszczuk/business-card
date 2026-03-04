import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const MoveForwardSectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) 0;
`;

const MoveForwardLink = styled(Link)`
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--radius-md);
  background-color: var(--link-background-color);
  text-decoration: none;
  color: var(--link-text-color);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-semibold);
  display: inline-block;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: background-color var(--transition-base), transform var(--transition-base);

  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
  }
`;

const MoveForwardSections = () => {
  return (
    <MoveForwardSectionsWrapper id="move-forward-sections">
      <MoveForwardLink to="/" role="button">
        Move Forward
      </MoveForwardLink>
    </MoveForwardSectionsWrapper>
  );
};

export default MoveForwardSections;
