import { SOCIAL_MEDIA_LINKS } from "../../utils/contact";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import SectionHeader from "../ui/SectionHeader";
import SectionIcons from "../tools/SectionIcons";
import ContactForm from "../features/ContactForm";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: white;
  margin-bottom: 60px;
  border-radius: 8px;
  box-shadow: 0 0 10px 8px rgba(10, 10, 10, 0.2);
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const SectionContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 650px;
    height: 400px;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <StaticImage
        src="../../assets/images/sections/contact.png"
        alt="ss"
        layout="fullWidth"
        placeholder="blurred"
        formats={["auto", "webp", "avif", "png"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          objectFit: "cover",
          filter: "brightness(80%)",
        }}
      />
      <SectionHeader title="Contact" color="#707070" />
      <SectionContent>
        <SectionIcons icons={SOCIAL_MEDIA_LINKS} direction="column" />
        <ContactForm />
      </SectionContent>
    </ContactWrapper>
  );
};

export default Contact;
