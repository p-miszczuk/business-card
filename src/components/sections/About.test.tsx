import { render, screen } from "@testing-library/react";
import AboutSection from "./About";
import "@testing-library/jest-dom";

describe("AboutSection", () => {
  it("renders section with correct id", () => {
    render(<AboutSection />);
    const section = document.getElementById("about");
    expect(section).toBeInTheDocument();
  });

  it("renders section header with title 'About'", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });

  it("renders about text with key content", () => {
    render(<AboutSection />);
    expect(screen.getByText(/Peter/i)).toBeInTheDocument();
    expect(screen.getByText(/frontend developer/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
  });

  it("mentions technologies and tools", () => {
    render(<AboutSection />);
    expect(screen.getByText(/Next\.js|Gatsby/i)).toBeInTheDocument();
    expect(screen.getByText(/Styled Components/i)).toBeInTheDocument();
    expect(screen.getByText(/Node\.js/i)).toBeInTheDocument();
    expect(screen.getByText(/MongoDB/i)).toBeInTheDocument();
    expect(screen.getByText(/Firebase/i)).toBeInTheDocument();
  });

  it("mentions AI tools and Cursor", () => {
    render(<AboutSection />);
    expect(screen.getByText(/Cursor/i)).toBeInTheDocument();
    expect(screen.getByText(/AI tools/i)).toBeInTheDocument();
  });
});
