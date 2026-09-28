import { render, screen, fireEvent } from "@testing-library/react";
import { CodeBlock } from "../CodeBlock";

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn().mockResolvedValue(undefined),
  },
});

describe("CodeBlock", () => {
  it("renders code content", () => {
    render(<CodeBlock code="console.log('hi')" language="javascript" />);
    expect(screen.getByText("Copy")).toBeInTheDocument();
  });

  it("displays language label by default", () => {
    render(<CodeBlock code="x = 1" language="python" />);
    expect(screen.getByText("python")).toBeInTheDocument();
  });

  it("displays title instead of language when provided", () => {
    render(<CodeBlock code="x = 1" language="python" title="Example Script" />);
    expect(screen.getByText("Example Script")).toBeInTheDocument();
    expect(screen.queryByText("python")).not.toBeInTheDocument();
  });

  it("defaults to plaintext language", () => {
    render(<CodeBlock code="some text" />);
    expect(screen.getByText("plaintext")).toBeInTheDocument();
  });

  it("copies code to clipboard on button click", () => {
    render(<CodeBlock code="test code" language="bash" />);
    const copyButton = screen.getByText("Copy").closest("button")!;
    fireEvent.click(copyButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("test code");
  });

  it("shows Copied! feedback after clicking copy", () => {
    render(<CodeBlock code="test" />);
    const copyButton = screen.getByText("Copy").closest("button")!;
    fireEvent.click(copyButton);
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });
});
