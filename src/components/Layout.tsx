import React, { JSX } from "react";
import styled from "styled-components";
import "../assets/sass/main.scss";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
