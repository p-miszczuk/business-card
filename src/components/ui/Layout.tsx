import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import React, { JSX, useEffect, useState } from "react";
import styled from "styled-components";
import "normalize.css";
import "../../assets/sass/main.scss";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
                content: "Piotr Miszczuk - web developer",
              },
              {
                name: "keywords",
                content:
                  "web developer, react developer, javascript developer, typescript developer, node.js developer, python developer, git, github",
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
