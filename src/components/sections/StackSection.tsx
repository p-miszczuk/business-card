import { FRONTEND_STACK, BACKEND_STACK } from "../../utils/stack";
import React from "react";
import styled from "styled-components";
import SectionIcons from "../tools/SectionIcons";
import SectionHeader from "../ui/SectionHeader";

const StackSectionContainer = styled.section`
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
  overflow: hidden;

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
    padding: var(--spacing-xl) var(--spacing-md);
  }
`;

const StackGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
`;

const StackLabel = styled.span`
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: var(--spacing-sm);
  display: block;
`;

const StackSection = () => {
  return (
    <StackSectionContainer id="stack">
      <SectionHeader title="Stack" />
      <StackGroup>
        <div>
          <StackLabel>Frontend</StackLabel>
          <SectionIcons icons={FRONTEND_STACK} transparentBackground />
        </div>
        <div>
          <StackLabel>Backend and databases</StackLabel>
          <SectionIcons icons={BACKEND_STACK} transparentBackground />
        </div>
      </StackGroup>
    </StackSectionContainer>
  );
};

export default StackSection;
