import React, { JSX } from "react";
import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import MainContainer from "../components/ui/MainContainer";
import MoveForwardSections from "../components/sections/MoveForwardSections";
import AboutSection from "../components/sections/AboutSection";
import StackSection from "../components/sections/StackSection";
import VisualElement from "../components/sections/VisualElement";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header />
      <MainContainer>
        <MoveForwardSections />
        <VisualElement
          id="move-forward-sections"
          sectionHeight={400}
          topImagePosition={170}
        />
        <AboutSection />
        <VisualElement id="about" sectionHeight={300} topImagePosition={120} />
        <StackSection />
        <VisualElement id="stack" sectionHeight={300} topImagePosition={120} />
      </MainContainer>
    </Layout>
  );
}
