import { render, screen } from "@testing-library/react";
import { LessonContent } from "../LessonContent";

describe("LessonContent", () => {
  it("renders plain text as paragraphs", () => {
    render(<LessonContent content="Hello world" />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders headings", () => {
    render(<LessonContent content={"# Main Title\n\n## Sub Title\n\n### Small Title"} />);
    expect(screen.getByText("Main Title")).toBeInTheDocument();
    expect(screen.getByText("Sub Title")).toBeInTheDocument();
    expect(screen.getByText("Small Title")).toBeInTheDocument();
  });

  it("renders code blocks with language label", () => {
    const content = "```bash\necho hello\n```";
    render(<LessonContent content={content} />);
    expect(screen.getByText("bash")).toBeInTheDocument();
    expect(screen.getByText("Copy")).toBeInTheDocument();
  });

  it("renders tip callouts", () => {
    const content = "<tip>\nThis is a tip\n</tip>";
    render(<LessonContent content={content} />);
    expect(screen.getByTestId("callout-tip")).toBeInTheDocument();
  });

  it("renders warning callouts", () => {
    const content = "<warning>\nThis is a warning\n</warning>";
    render(<LessonContent content={content} />);
    expect(screen.getByTestId("callout-warning")).toBeInTheDocument();
  });

  it("renders info callouts", () => {
    const content = "<info>\nThis is info\n</info>";
    render(<LessonContent content={content} />);
    expect(screen.getByTestId("callout-info")).toBeInTheDocument();
  });

  it("renders aussie callouts", () => {
    const content = "<aussie>\nG'day mate\n</aussie>";
    render(<LessonContent content={content} />);
    expect(screen.getByTestId("callout-aussie")).toBeInTheDocument();
  });

  it("renders unordered lists", () => {
    const content = "- Item one\n- Item two\n- Item three";
    render(<LessonContent content={content} />);
    const list = screen.getByRole("list");
    expect(list.tagName).toBe("UL");
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("renders ordered lists", () => {
    const content = "1. First\n2. Second\n3. Third";
    render(<LessonContent content={content} />);
    const list = screen.getByRole("list");
    expect(list.tagName).toBe("OL");
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("renders mixed content in order", () => {
    const content = [
      "# Getting Started",
      "",
      "Some intro text here.",
      "",
      "```bash",
      "npm install",
      "```",
      "",
      "<tip>",
      "This is helpful",
      "</tip>",
      "",
      "More text after."
    ].join("\n");

    render(<LessonContent content={content} />);
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.getByText("Some intro text here.")).toBeInTheDocument();
    expect(screen.getByTestId("callout-tip")).toBeInTheDocument();
    expect(screen.getByText("More text after.")).toBeInTheDocument();
  });

  it("renders inline markdown formatting", () => {
    const content = "Use **bold** and `code` in text.";
    const { container } = render(<LessonContent content={content} />);
    const strong = container.querySelector("strong");
    expect(strong).toBeInTheDocument();
    expect(strong?.textContent).toBe("bold");
    const code = container.querySelector("code");
    expect(code).toBeInTheDocument();
    expect(code?.textContent).toBe("code");
  });

  it("renders tables", () => {
    const content = [
      "| Name | Value |",
      "|------|-------|",
      "| Foo  | 42    |",
      "| Bar  | 99    |"
    ].join("\n");
    render(<LessonContent content={content} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Foo")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
  });
});
