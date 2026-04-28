import { ComponentChildren, JSX } from "preact";
import { hydrate, prerender as ssr } from "preact-iso";
import "./style.css";

/**
 * BentoTileProps Interface
 * Intent: Define the shape of props for the BentoTile component.
 * Expected Result: Improved developer experience and type safety.
 */
interface BentoTileProps {
  children: ComponentChildren;
  style?: preact.CSSProperties;
  class?: string;
}

/**
 * Header Component
 * Intent: Consistent navigation.
 */
function Header() {
  return (
    <header class="header">
      <div class="logo">SAMUEL M.</div>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="#work"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 500 }}
        >
          Work
        </a>
        <a
          href="#about"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 500 }}
        >
          About
        </a>
        <a
          href="#contact"
          style={{ textDecoration: "none", color: "inherit", fontWeight: 500 }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

/**
 * BentoTile Component
 * Intent: Reusable grid item with defaults.
 * Expected Result: Renders a div with at least 'bento-tile' class and empty style object if none provided.
 */
function BentoTile({
  children,
  style = {},
  class: className = "",
}: BentoTileProps) {
  return (
    <div class={`bento-tile ${className}`} style={style}>
      {children}
    </div>
  );
}

export function App() {
  return (
    <div>
      <Header />
      <main class="bento-container" id="work">
        {/* Profile / Identity */}
        <BentoTile class="tile-profile" style={{ gridColumn: "span 2" }}>
          <h1>Developer & Engineer.</h1>
          <p>
            I specialize in building performant web ecosystems and low-level
            system utilities.
          </p>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#4caf50",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>
              Available for projects
            </span>
          </div>
        </BentoTile>

        {/* Tech Stack */}
        <BentoTile>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Stack</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["React", "Rust", "Astro", "TS", "Node"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(128,128,128,0.1)",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </BentoTile>

        {/* Capstone Project */}
        <BentoTile
          class="tile-capstone"
          style={{ gridColumn: "span 2", gridRow: "span 2" }}
        >
          <div>
            <span
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                opacity: 0.8,
              }}
            >
              Capstone 2026
            </span>
            <h2 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
              Full-Stack Ecosystem
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.9 }}>
              A modern web stack exploration using <strong>Astro</strong> for
              performance,
              <strong>Alpine</strong> and <strong>HTMX</strong> for reactive
              interactivity, and <strong>React</strong> for complex components.
            </p>
          </div>
          <div style={{ marginTop: "auto" }}>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Case Study <span>→</span>
            </a>
          </div>
        </BentoTile>

        {/* Rust Project */}
        <BentoTile class="tile-rust" style={{ gridColumn: "span 2" }}>
          <div>
            <h2 style={{ color: "#4caf50", fontSize: "1.4rem" }}>grep-rs</h2>
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Multithreaded file search tool built with Rust. Outperforms
              standard grep in high-concurrency environments.
            </p>
            <code>$ grep-rs --threads 8 "search_term" ./path</code>
          </div>
        </BentoTile>

        {/* Socials / Links */}
        <BentoTile
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <a href="#" style={{ color: "inherit", fontWeight: 600 }}>
              GitHub
            </a>
            <a href="#" style={{ color: "inherit", fontWeight: 600 }}>
              LinkedIn
            </a>
          </div>
        </BentoTile>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "var(--spacing-lg) 0",
          opacity: 0.4,
          fontSize: "0.8rem",
        }}
      >
        &copy; 2026 Samuel M. Built with Preact & Modern CSS.
      </footer>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data: any) {
  return await ssr(<App {...data} />);
}
