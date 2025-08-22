import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const MoveForwardSectionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MoveForwardLink = styled(Link)`
  width: 350px;
  height: 80px;
  border-radius: 20px;
  background-color: var(--link-background-color);
  text-decoration: none;
  color: var(--link-text-color);
  font-size: var(--font-size-lg);
  display: block;
  text-align: center;
  line-height: 80px;
  &:hover {
    background-color: transparent;
    border: 1px solid var(--link-border-color);
    color: var(--text-color);
    transition: all 0.3s ease;
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
