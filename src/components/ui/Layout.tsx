import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import React, { JSX } from "react";
import styled from "styled-components";
import "normalize.css";
import "../../assets/sass/main.scss";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 var(--spacing-lg);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 var(--spacing-md);
  }
`;

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          {/* @ts-ignore - Working around react-helmet TypeScript compatibility issue */}
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: "description",
                content: "Piotr Miszczuk - frontend developer",
              },
              {
                name: "keywords",
                content:
                  "frontend developer, react developer, javascript developer, typescript developer, node.js developer, python developer, git, github",
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <LayoutContainer>{children}</LayoutContainer>
        </>
      )}
    />
  );
};

export default Layout;
