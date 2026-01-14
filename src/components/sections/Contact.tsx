import { SOCIAL_MEDIA_LINKS } from "../../utils/contact";
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
  min-height: 300px;
  background-color: white;
  margin-bottom: 60px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <SectionHeader title="Contact" color="#707070" />
      <SectionContent>
        <SectionIcons icons={SOCIAL_MEDIA_LINKS} />
        <ContactForm />
      </SectionContent>
    </ContactWrapper>
  );
};

export default Contact;
