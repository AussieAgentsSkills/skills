import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe("Header", () => {
  it("renders the logo and site name", () => {
    render(<Header />);
    expect(screen.getByText("Aussie Agent Skills")).toBeInTheDocument();
  });

  it("renders default nav links on desktop", () => {
    render(<Header />);
    const desktopNav = screen.getByRole("banner").querySelector("nav.hidden.md\\:flex");
    expect(desktopNav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Marketplace" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Premium" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Learn" })).toBeInTheDocument();
  });

  it("renders custom nav links when provided", () => {
    render(
      <Header navLinks={[
        { href: "/custom", label: "Custom Link" },
        { href: "/other", label: "Other Link", className: "text-red-400" },
      ]} />
    );
    expect(screen.getByRole("link", { name: "Custom Link" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Other Link" })).toBeInTheDocument();
  });

  it("renders back link when provided", () => {
    render(
      <Header
        backLink={{ href: "/guides", label: "Back to Guides" }}
        navLinks={[]}
      />
    );
    expect(screen.getByRole("link", { name: "Back to Guides" })).toHaveAttribute("href", "/guides");
  });

  it("renders external links with target blank", () => {
    render(
      <Header navLinks={[
        { href: "https://github.com/test", label: "GitHub", external: true },
      ]} />
    );
    const githubLinks = screen.getAllByRole("link", { name: "GitHub" });
    // Desktop link should have target _blank
    const externalLink = githubLinks.find(link => link.getAttribute("target") === "_blank");
    expect(externalLink).toBeTruthy();
  });

  it("shows hamburger menu button on mobile", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: "Open menu" });
    expect(menuButton).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Header />);

    // Menu should not be visible initially
    const mobileNavs = screen.getByRole("banner").querySelectorAll("nav.md\\:hidden");
    expect(mobileNavs.length).toBe(0);

    // Click to open
    await user.click(screen.getByRole("button", { name: "Open menu" }));

    // Menu should now be visible
    const openMobileNav = screen.getByRole("banner").querySelector("nav.md\\:hidden");
    expect(openMobileNav).toBeInTheDocument();

    // Button should now say close
    expect(screen.getByRole("button", { name: "Close menu" })).toBeInTheDocument();
  });

  it("closes mobile menu when a link is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Header navLinks={[
        { href: "/test", label: "Test Link" },
      ]} />
    );

    // Open menu
    await user.click(screen.getByRole("button", { name: "Open menu" }));

    // Click a link in the mobile menu
    const mobileNav = screen.getByRole("banner").querySelector("nav.md\\:hidden");
    const mobileLink = mobileNav?.querySelector("a");
    expect(mobileLink).toBeTruthy();
    await user.click(mobileLink!);

    // Menu should close
    const closedNav = screen.getByRole("banner").querySelector("nav.md\\:hidden");
    expect(closedNav).toBeNull();
  });

  it("renders logo link pointing to home", () => {
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /Aussie Agent Skills/ });
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("applies sticky positioning", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header.className).toContain("sticky");
    expect(header.className).toContain("top-0");
  });

  it("renders empty nav when navLinks is empty array", () => {
    render(<Header navLinks={[]} />);
    const desktopNav = screen.getByRole("banner").querySelector("nav.hidden.md\\:flex");
    expect(desktopNav).toBeInTheDocument();
    expect(desktopNav?.querySelectorAll("a").length).toBe(0);
  });
});
