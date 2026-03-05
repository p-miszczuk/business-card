import React, { JSX } from "react";
import styled from "styled-components";

const MENU_LINKS = [
  { label: "Home", url: "#header" },
  { label: "About", url: "#about" },
  { label: "Stack", url: "#stack" },
  { label: "Contact", url: "#contact" },
] as const;

const NavigationContainer = styled.nav`
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
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

const NavLink = styled.a`
  color: var(--text-secondary);
  font-size: 1rem;
  text-decoration: none;
  transition: color var(--transition-fast);
  cursor: pointer;

  &:hover {
    color: var(--accent-primary);
  }
`;

const scrollToSection = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const Menu = (): JSX.Element => {
  return (
    <NavigationContainer>
      <NavLinks>
        {MENU_LINKS.map((link) => (
          <NavItem key={link.label}>
            <NavLink
              href={link.url}
              onClick={scrollToSection(link.url.slice(1))}
            >
              {link.label}
            </NavLink>
          </NavItem>
        ))}
      </NavLinks>
    </NavigationContainer>
  );
};

export default Menu;
