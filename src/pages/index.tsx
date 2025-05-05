import React, { JSX } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Header />
      <main></main>
    </Layout>
  );
}
