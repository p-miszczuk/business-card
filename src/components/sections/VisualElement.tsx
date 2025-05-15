import React from "react";
import styled from "styled-components";

const VisualElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const VisualElementLine = styled.span<{
  sectionHeight: number;
  topPosition?: number;
}>`
  position: absolute;
  display: block;
  width: 1px;
  background-color: var(--background-color-line);
  height: ${({ sectionHeight }) => sectionHeight || 200}px;
  top: ${({ topPosition }) => topPosition || 0}px;
`;

export const ImageElement = styled.span<{ top?: number }>`
  background-image: url("/images/arrow.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60px;
  height: 60px;
  position: absolute;
  top: ${({ top }) => top || 200}px;
`;

const VisualElement = ({
  sectionHeight,
  topPosition,
  id,
  topImagePosition,
}: {
  sectionHeight: number;
  topPosition?: number;
  id?: string;
  topImagePosition?: number;
}) => {
  return (
    <VisualElementWrapper key={id}>
      <VisualElementLine
        sectionHeight={sectionHeight}
        topPosition={topPosition}
      />
      <ImageElement top={topImagePosition} />
    </VisualElementWrapper>
  );
};

export default VisualElement;
