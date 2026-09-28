import { render, screen } from "@testing-library/react";
import ProgressPage from "../page";

jest.mock("next/link", () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

jest.mock("next/navigation", () => ({
  useParams: () => ({ module: "terminal-basics", lesson: "what-is-terminal" }),
}));

beforeEach(() => {
  localStorage.clear();
});

describe("ProgressPage", () => {
  it("renders the progress heading", () => {
    render(<ProgressPage />);
    expect(screen.getByText("Your Progress")).toBeInTheDocument();
  });

  it("renders the footer with copyright and links", () => {
    render(<ProgressPage />);
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

  it("shows 0% progress initially", () => {
    render(<ProgressPage />);
    expect(screen.getAllByText("0%").length).toBeGreaterThan(0);
  });

  it("renders continue learning button", () => {
    render(<ProgressPage />);
    expect(screen.getByText("Continue Learning")).toBeInTheDocument();
  });

  it("renders reset progress button", () => {
    render(<ProgressPage />);
    expect(screen.getByText("Reset Progress")).toBeInTheDocument();
  });
});
