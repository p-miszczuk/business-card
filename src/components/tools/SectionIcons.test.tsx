import { render, screen } from "@testing-library/react";
import SectionIcons from "./SectionIcons";
import "@testing-library/jest-dom";

const MockIcon = () => <svg data-testid="mock-icon" />;

const mockIconsWithLinks = [
  {
    id: "test-1",
    name: "TestLink",
    Icon: MockIcon,
    path: "https://example.com",
  },
];

const mockIconsWithText = [
  {
    id: "test-2",
    name: "TestText",
    Icon: MockIcon,
    desc: "Test description tooltip",
  },
];

const mockIconsMixed = [
  {
    id: "link-1",
    name: "LinkIcon",
    Icon: MockIcon,
    path: "https://link.com",
  },
  {
    id: "text-1",
    name: "TextIcon",
    Icon: MockIcon,
    desc: "Description for text icon",
  },
];

describe("SectionIcons", () => {
  it("renders icons with links", () => {
    render(<SectionIcons icons={mockIconsWithLinks} />);
    expect(screen.getByText("TestLink")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /testlink/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders icons without links (text only)", () => {
    render(<SectionIcons icons={mockIconsWithText} />);
    expect(screen.getByText("TestText")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders tooltip when desc is provided", () => {
    render(<SectionIcons icons={mockIconsWithText} />);
    expect(screen.getByText("Test description tooltip")).toBeInTheDocument();
  });

  it("renders mixed icons (links and text)", () => {
    render(<SectionIcons icons={mockIconsMixed} />);
    expect(screen.getByText("LinkIcon")).toBeInTheDocument();
    expect(screen.getByText("TextIcon")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkicon/i })).toBeInTheDocument();
  });

  it("renders all icons from the list", () => {
    render(<SectionIcons icons={mockIconsMixed} />);
    const icons = screen.getAllByTestId("mock-icon");
    expect(icons).toHaveLength(2);
  });

  it("accepts iconGap prop", () => {
    render(<SectionIcons icons={mockIconsWithLinks} iconGap="2rem" />);
    expect(screen.getByText("TestLink")).toBeInTheDocument();
  });
});
