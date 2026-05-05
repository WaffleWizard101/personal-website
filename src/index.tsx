import {
  ErrorBoundary,
  hydrate,
  LocationProvider,
  Router,
  prerender as ssr,
} from "preact-iso";
import "./style.css";
import { Home } from "./home/Home";
import { About } from "./pages/About";

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
          href="/about"
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

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary onError={(e) => console.error(e)}>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
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
      </ErrorBoundary>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data: any) {
  return await ssr(<App {...data} />);
}
