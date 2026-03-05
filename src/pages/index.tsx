import React, { JSX } from "react";
import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import MainContainer from "../components/ui/MainContainer";
import Menu from "../components/Menu";
import MoveForwardSections from "../components/sections/MoveForward";
import About from "../components/sections/About";
import Stack from "../components/sections/Stack";
import VisualElement from "../components/sections/VisualElement";
import Contact from "../components/sections/Contact";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Menu />
      <Header />
      <MainContainer>
        <MoveForwardSections />
        <VisualElement
          id="move-forward-sections"
          sectionHeight={300}
          topImagePosition={120}
        />
        <About />
        <VisualElement id="about" sectionHeight={300} topImagePosition={120} />
        <Stack />
        <VisualElement id="stack" sectionHeight={300} topImagePosition={120} />
        <Contact />
      </MainContainer>
    </Layout>
  );
}
