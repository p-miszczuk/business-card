import { render, screen } from "@testing-library/react";
import StackSection from "./Stack";
import "@testing-library/jest-dom";

describe("StackSection", () => {
  it("renders section with correct id", () => {
    render(<StackSection />);
    const section = document.getElementById("stack");
    expect(section).toBeInTheDocument();
  });

  it("renders section header with title 'Stack'", () => {
    render(<StackSection />);
    expect(screen.getByRole("heading", { name: /stack/i })).toBeInTheDocument();
  });

  it("renders Frontend stack label", () => {
    render(<StackSection />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("renders Backend and databases stack label", () => {
    render(<StackSection />);
    expect(screen.getByText("Backend and databases")).toBeInTheDocument();
  });

  it("renders frontend technologies", () => {
    render(<StackSection />);
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Gatsby")).toBeInTheDocument();
  });

  it("renders backend technologies", () => {
    render(<StackSection />);
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("MongoDB")).toBeInTheDocument();
    expect(screen.getByText("Firebase")).toBeInTheDocument();
    expect(screen.getByText("Prisma")).toBeInTheDocument();
  });
});
