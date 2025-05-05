import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import config from "../../config";
import Menu from "./Menu";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: var(--font-size-xLarge);
  color: var(--text-color);
`;

const ShortDescription = styled.p`
  font-size: var(--font-size-large);
  text-align: center;
  &::before {
    content: "";
    display: block;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding-top: 1em;
  }
`;

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.h1`
  margin-top: 200px;
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
