"use client";

import React from "react";
import styled from "styled-components";
import JsIcon from "../../assets/images/stack/js-icon.svg";
import ReactIcon from "../../assets/images/stack/react-icon.svg";
import HtmlIcon from "../../assets/images/stack/html-icon.svg";
import CssIcon from "../../assets/images/stack/css-icon.svg";
import SassIcon from "../../assets/images/stack/sass-icon.svg";
import NextjsIcon from "../../assets/images/stack/nextjs-icon.svg";
import ReduxIcon from "../../assets/images/stack/redux-icon.svg";
import TsIcon from "../../assets/images/stack/ts-icon.svg";
import StyledComponentsIcon from "../../assets/images/stack/styled-components-icon.svg";
import BootstrapIcon from "../../assets/images/stack/bootstrap-icon.svg";
import MaterialUiIcon from "../../assets/images/stack/material-icon.svg";
import GithubIcon from "../../assets/images/stack/github-icon.svg";
import FirebaseIcon from "../../assets/images/stack/firebase-icon.svg";
import GatsbyIcon from "../../assets/images/stack/gatsby-icon.svg";

const icons = [
  {
    id: "javascript",
    name: "JavaScript",
    Icon: JsIcon,
  },
  {
    id: "react",
    name: "React",
    Icon: ReactIcon,
  },
  {
    id: "nextjs",
    name: "Next.js",
    Icon: NextjsIcon,
  },
  {
    id: "typescript",
    name: "TypeScript",
    Icon: TsIcon,
  },
  {
    id: "gatsby",
    name: "Gatsby",
    Icon: GatsbyIcon,
  },
  {
    id: "redux",
    name: "Redux",
    Icon: ReduxIcon,
  },
  {
    id: "html",
    name: "HTML",
    Icon: HtmlIcon,
  },
  {
    id: "css",
    name: "CSS",
    Icon: CssIcon,
  },
  {
    id: "sass",
    name: "SASS",
    Icon: SassIcon,
  },
  {
    id: "styled-components",
    name: "Styled Components",
    Icon: StyledComponentsIcon,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    Icon: BootstrapIcon,
  },
  {
    id: "material-ui",
    name: "Material-UI",
    Icon: MaterialUiIcon,
  },
  {
    id: "github",
    name: "GitHub",
    Icon: GithubIcon,
  },
  {
    id: "firebase",
    name: "Firebase",
    Icon: FirebaseIcon,
  },
];

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  min-height: 100px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconLabel = styled.span`
  margin-top: 20px;
  font-size: 0.9rem;
  color: var(--primary-green);
  line-height: 1.2;
  text-align: center;
`;

const SectionIcons = () => {
  return (
    <IconsContainer>
      {icons.map(({ name, id, Icon }) => (
        <IconWrapper key={id}>
          <Icon />
          <IconLabel>{name}</IconLabel>
        </IconWrapper>
      ))}
    </IconsContainer>
  );
};

export default SectionIcons;
