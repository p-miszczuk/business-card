import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import "@testing-library/jest-dom";

describe("Menu", () => {
  it("renders navigation", () => {
    render(<Menu />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("renders all menu links", () => {
    render(<Menu />);
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /stack/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
  });

  it("renders links with correct hrefs", () => {
    render(<Menu />);
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "#header",
    );
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: /stack/i })).toHaveAttribute(
      "href",
      "#stack",
    );
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("calls scrollIntoView when link is clicked", () => {
    const scrollIntoViewMock = jest.fn();
    const mockElement = { scrollIntoView: scrollIntoViewMock };
    jest
      .spyOn(document, "getElementById")
      .mockReturnValue(mockElement as unknown as HTMLElement);

    render(<Menu />);
    const aboutLink = screen.getByRole("link", { name: /about/i });
    aboutLink.click();

    expect(document.getElementById).toHaveBeenCalledWith("about");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "center",
    });

    jest.restoreAllMocks();
  });
});
