import { render, screen } from "@testing-library/react";
import LearnPage from "../page";
import { modules, getTotalLessons } from "@/data/lessons";

jest.mock("next/link", () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

beforeEach(() => {
  localStorage.clear();
});

describe("LearnPage", () => {
  it("renders the course title", () => {
    render(<LearnPage />);
    expect(screen.getByText("Zero to Claude Code")).toBeInTheDocument();
  });

  it("renders all module titles", () => {
    render(<LearnPage />);
    for (const mod of modules) {
      expect(screen.getByText(mod.title)).toBeInTheDocument();
    }
  });

  it("renders lesson titles within modules", () => {
    render(<LearnPage />);
    const firstModule = modules[0];
    for (const lesson of firstModule.lessons) {
      expect(screen.getByText(lesson.title)).toBeInTheDocument();
    }
  });

  it("displays total lesson count", () => {
    render(<LearnPage />);
    const total = getTotalLessons();
    expect(screen.getByText(`${total}`)).toBeInTheDocument();
  });

  it("shows 0% progress initially", () => {
    render(<LearnPage />);
    const matches = screen.getAllByText(/0% complete/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it("renders the start learning CTA", () => {
    render(<LearnPage />);
    expect(screen.getByText("Start Learning →")).toBeInTheDocument();
  });

  it("renders without crashing when localStorage is corrupted", () => {
    localStorage.setItem("zero-to-claude-progress", "not-valid-json{{{");
    expect(() => render(<LearnPage />)).not.toThrow();
  });

  it("renders the footer with copyright and links", () => {
    render(<LearnPage />);
    const copyright = screen.getByText(/© 2026 Aussie Agent Skills/);
    expect(copyright).toBeInTheDocument();
    const footer = copyright.closest("footer");
    expect(footer).toBeInTheDocument();
    const footerLinks = footer!.querySelectorAll("a");
    const hrefs = Array.from(footerLinks).map(a => a.getAttribute("href"));
    expect(hrefs).toContain("/");
    expect(hrefs).toContain("/premium");
    expect(hrefs).toContain("/newsletter");
  });
});
