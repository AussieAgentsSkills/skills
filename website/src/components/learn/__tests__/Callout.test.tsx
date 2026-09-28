import { render, screen } from "@testing-library/react";
import { Callout } from "../Callout";

describe("Callout", () => {
  it("renders info variant with title and body", () => {
    render(
      <Callout type="info" title="Custom Title">
        Info body text
      </Callout>
    );
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Info body text")).toBeInTheDocument();
    expect(screen.getByTestId("callout-info")).toBeInTheDocument();
  });

  it("renders warning variant", () => {
    render(
      <Callout type="warning" title="Watch Out">
        Be careful here
      </Callout>
    );
    expect(screen.getByText("Watch Out")).toBeInTheDocument();
    expect(screen.getByTestId("callout-warning")).toBeInTheDocument();
  });

  it("renders tip variant", () => {
    render(
      <Callout type="tip" title="Pro Tip">
        Helpful advice
      </Callout>
    );
    expect(screen.getByText("Pro Tip")).toBeInTheDocument();
    expect(screen.getByTestId("callout-tip")).toBeInTheDocument();
  });

  it("uses default title when none provided", () => {
    render(<Callout type="info">Some content</Callout>);
    expect(screen.getByText("Info")).toBeInTheDocument();
  });

  it("renders aussie variant", () => {
    render(
      <Callout type="aussie">
        Aussie specific note
      </Callout>
    );
    expect(screen.getByText("Aussie Note")).toBeInTheDocument();
    expect(screen.getByTestId("callout-aussie")).toBeInTheDocument();
  });
});
