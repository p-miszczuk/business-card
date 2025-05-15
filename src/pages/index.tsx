import React, { JSX } from "react";
import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import MainContainer from "../components/ui/MainContainer";
import MoveForwardSections from "../components/sections/MoveForwardSections";
import AboutSection from "../components/sections/AboutSection";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header />
      <MainContainer>
        <MoveForwardSections />
        <AboutSection />
      </MainContainer>
    </Layout>
  );
}
