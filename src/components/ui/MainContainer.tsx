import React from "react";
import styled from "styled-components";

const MainContainerWrapper = styled.main`
  width: 100%;
  padding: var(--spacing-xl) 0 var(--spacing-3xl);
`;

const MainContainer = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return <MainContainerWrapper id="main">{children}</MainContainerWrapper>;
};

export default MainContainer;
