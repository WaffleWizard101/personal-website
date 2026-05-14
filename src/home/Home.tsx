interface BentoTileProps {
  children: preact.ComponentChildren;
  style?: preact.CSSProperties;
  class?: string;
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

export function Home() {
  return (
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
          {["React", "Rust", "TS", "Node", "Astro", "Flutter"].map((tag) => (
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
              background: "rgba(128,128,128,0.1)",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              opacity: 0.8,
            }}
          >
            Family Dashboard App
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
          <h4>Watch our team's presentation:</h4>
          <iframe
            style={{ marginBottom: "1em" }}
            class="contained-iframe"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Uds2vB9HkkQ?si=63IHzXFttR45H1Ym"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ marginTop: "auto" }}>
          <a
            href="/fda"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Read About It
          </a>
        </div>
      </BentoTile>

      {/* Rust Project */}
      <BentoTile class="tile-rust" style={{ gridColumn: "span 2" }}>
        <div style={{ margin: "auto" }}>
          <h2 style={{ color: "#4caf50", fontSize: "1.4rem" }}>TextSearch</h2>
          <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
            Multithreaded file search tool built with Rust.
          </p>
          <code>$ textsearch -p ./path -o ./path2 "search term"</code>
        </div>
      </BentoTile>

      {/* Socials / Links */}
      <BentoTile
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gridRow: "span 1",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <a
            href="https://github.com/WaffleWizard101"
            style={{ color: "inherit", fontWeight: 600 }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-murray-17979315b"
            style={{ color: "inherit", fontWeight: 600 }}
          >
            LinkedIn
          </a>
        </div>
      </BentoTile>
    </main>
  );
}
