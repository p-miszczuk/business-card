import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import config from "../../../config";
import Menu from "../Menu";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-color);
  letter-spacing: -0.02em;
  transition: color var(--transition-base);

  &:hover {
    color: var(--accent-primary);
  }
`;

const ShortDescription = styled.p`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-normal);
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: var(--spacing-sm);
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-3xl) 0;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer id="header">
      <Menu />
      <HeaderContent>
        <StyledLink to="/">{config.authorName}</StyledLink>
        <ShortDescription>{config.heading}</ShortDescription>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
