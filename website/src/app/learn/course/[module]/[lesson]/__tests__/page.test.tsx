import { render, screen } from "@testing-library/react";
import LessonPage from "../page";

jest.mock("next/link", () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

const mockUseParams = jest.fn();
jest.mock("next/navigation", () => ({
  useParams: () => mockUseParams(),
}));

beforeEach(() => {
  localStorage.clear();
  mockUseParams.mockReturnValue({ module: "terminal-basics", lesson: "what-is-terminal" });
});

describe("LessonPage", () => {
  it("renders the lesson content", () => {
    render(<LessonPage />);
    expect(screen.getByText("Learn")).toBeInTheDocument();
    expect(screen.getAllByText(/Terminal Basics/).length).toBeGreaterThan(0);
  });

  it("renders the footer with copyright and links", () => {
    render(<LessonPage />);
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

  it("renders not found state for invalid lesson", () => {
    mockUseParams.mockReturnValue({ module: "nonexistent", lesson: "fake" });
    render(<LessonPage />);
    expect(screen.getByText("Lesson Not Found")).toBeInTheDocument();
  });
});
