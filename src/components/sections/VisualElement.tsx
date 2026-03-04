import React from "react";
import styled from "styled-components";

const VisualElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: var(--spacing-lg) 0;
`;

export const VisualElementLine = styled.span<{
  sectionHeight: number;
}>`
  display: block;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--border-color) 20%,
    var(--border-color) 80%,
    transparent
  );
  height: ${({ sectionHeight }) => sectionHeight || 200}px;
`;

export const ImageElement = styled.span<{ top?: number }>`
  background-image: url("/images/arrow.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 48px;
  height: 48px;
  position: absolute;
  top: ${({ top }) => top || 200}px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.95;
`;

const VisualElement = ({
  sectionHeight,
  id,
  topImagePosition,
}: {
  sectionHeight: number;
  id?: string;
  topImagePosition?: number;
}) => {
  return (
    <VisualElementWrapper key={id}>
      <VisualElementLine sectionHeight={sectionHeight} />
      <ImageElement top={topImagePosition} />
    </VisualElementWrapper>
  );
};

export default VisualElement;
