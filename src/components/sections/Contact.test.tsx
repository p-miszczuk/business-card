import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import "@testing-library/jest-dom";

jest.mock("../features/ContactForm", () => {
  return function MockContactForm() {
    return <div data-testid="contact-form">Contact Form</div>;
  };
});

describe("Contact", () => {
  it("renders section with correct id", () => {
    render(<Contact />);
    const section = document.getElementById("contact");
    expect(section).toBeInTheDocument();
  });

  it("renders section header with title 'Contact'", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /contact/i }),
    ).toBeInTheDocument();
  });

  it("renders social media icons", () => {
    render(<Contact />);
    expect(screen.getByText("Github")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("renders contact form", async () => {
    render(<Contact />);
    expect(await screen.findByTestId("contact-form")).toBeInTheDocument();
  });

  it("renders social links with correct hrefs", () => {
    render(<Contact />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/p-miszczuk");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
