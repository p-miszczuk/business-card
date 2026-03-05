import { SOCIAL_MEDIA_LINKS } from "../../utils/contact";
import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import SectionHeader from "../ui/SectionHeader";
import SectionIcons from "../tools/SectionIcons";

// it's related with Formspree, so we need to lazy load it
// because it's not available on the server side
// and we need to avoid hydration errors
const ContactForm = lazy(() => import("../features/ContactForm"));

const FormFallback = styled.div`
  min-height: 200px;
`;

const ContactWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: var(--background-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2xl);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 10px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(88, 166, 255, 0.25) 30%,
      rgba(88, 166, 255, 0.7) 50%,
      rgba(88, 166, 255, 0.25) 70%,
      transparent 100%
    );
    border-radius: 0 0 50% 50%;
    filter: blur(4px);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: var(--spacing-lg) var(--spacing-md);
  }
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`;

const SocialBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--spacing-3xl);
  flex-wrap: wrap;
  padding: var(--spacing-md) 0;
  margin-bottom: var(--spacing-lg);
  width: 100%;

  @media (min-width: 768px) {
    gap: var(--spacing-3xl);
  }
`;

const FormBlock = styled.div`
  width: 100%;
  max-width: 520px;
  padding: var(--spacing-lg);
  background: var(--background-elevated);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    padding: var(--spacing-md);
  }
`;

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactHeader>
        <SectionHeader title="Contact" />
      </ContactHeader>

      <SocialBlock>
        <SectionIcons
          icons={SOCIAL_MEDIA_LINKS}
          direction="row"
          iconGap="var(--spacing-3xl)"
        />
      </SocialBlock>

      <FormBlock>
        {typeof window !== "undefined" ? (
          <Suspense fallback={<FormFallback />}>
            <ContactForm />
          </Suspense>
        ) : (
          <FormFallback />
        )}
      </FormBlock>
    </ContactWrapper>
  );
};

export default Contact;
