import React from "react";
import styled from "styled-components";

const MainContainerWrapper = styled.main`
  margin-top: 150px;
  width: 100%;
`;

const MainContainer = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return <MainContainerWrapper>{children}</MainContainerWrapper>;
};

export default MainContainer;
