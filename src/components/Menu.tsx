import React, { JSX } from "react";
import styled from "styled-components";

const MENU_LINKS = [
  { label: "Sekcja 1" },
  { label: "Sekcja 2" },
  { label: "Sekcja 3" },
] as const;

const NavigationContainer = styled.nav`
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavText = styled.span`
  color: var(--text-secondary);
  font-size: 1rem;
  cursor: default;
`;

const Menu = (): JSX.Element => {
  return (
    <NavigationContainer>
      <NavLinks>
        {MENU_LINKS.map((link) => (
          <NavItem key={link.label}>
            <NavText>{link.label}</NavText>
          </NavItem>
        ))}
      </NavLinks>
    </NavigationContainer>
  );
};

export default Menu;
