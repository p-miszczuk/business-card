import React, { JSX } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
`;

const NotFoundPageTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const NotFoundPageDescription = styled.div`
  font-size: 2rem;
`;

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageContainer>
      <NotFoundPageTitle>404</NotFoundPageTitle>
      <NotFoundPageDescription>Strona nie istnieje</NotFoundPageDescription>
      <Link to="/">Wróć do strony głównej</Link>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
