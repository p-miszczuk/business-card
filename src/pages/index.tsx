import React, { JSX } from "react";
import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import MainContainer from "../components/ui/MainContainer";
import Menu from "../components/Menu";
import MoveForwardSections from "../components/sections/MoveForwardSections";
import AboutSection from "../components/sections/AboutSection";
import StackSection from "../components/sections/StackSection";
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
        <AboutSection />
        <VisualElement id="about" sectionHeight={300} topImagePosition={120} />
        <StackSection />
        <VisualElement id="stack" sectionHeight={300} topImagePosition={120} />
        <Contact />
      </MainContainer>
    </Layout>
  );
}
