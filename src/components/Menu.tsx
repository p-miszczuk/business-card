import React, { JSX, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MENU_LINKS = [
  {
    label: "Sekcja 1",
    url: "#sekcja-1",
  },
  {
    label: "Sekcja 2",
    url: "#sekcja-2",
  },
  {
    label: "Sekcja 3",
    url: "#sekcja-3",
  },
] as const;

const NavigationContainer = styled.nav`
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: end;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 250px;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 60px;
    right: 0;
    width: 100px;
    height: 100vh;
    background-color: var(--background-color);
    padding: 2rem;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 1024px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const HamburgerIcon = styled.span<{ isOpen: boolean }>`
  display: block;
  position: relative;
  width: 24px;
  height: 18px;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--text-color);
    border-radius: 2px;
    transition: transform 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "8px" : "0")};
    transform: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "rotate(45deg)" : "rotate(0)"};
  }

  span:nth-child(2) {
    top: 8px;
    opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    top: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "8px" : "16px")};
    transform: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "rotate(-45deg)" : "rotate(0)"};
  }
`;

const Menu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <NavigationContainer>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={isOpen}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      </HamburgerButton>

      <NavLinks isOpen={isOpen}>
        {MENU_LINKS.map((link) => (
          <NavItem key={link.url}>
            <NavLink to={link.url} onClick={scrollToSection(link.url)}>
              {link.label}
            </NavLink>
          </NavItem>
        ))}
      </NavLinks>
    </NavigationContainer>
  );
};

export default Menu;
