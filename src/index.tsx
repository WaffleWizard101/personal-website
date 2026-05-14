import {
  ErrorBoundary,
  hydrate,
  LocationProvider,
  Route,
  Router,
  prerender as ssr,
} from "preact-iso";
import "./style.css";
import { Home } from "./home/Home";
import { About } from "./pages/About";
import { MainFooter } from "./components/main/main-footer/MainFooter";
import { Contact } from "./pages/Contact";

/**
 * Header Component
 * Intent: Consistent navigation.
 */
function Header() {
  return (
    <header class="header">
      <a href="/" class="logo">
        SAMUEL M.
        {/*<div>*/}
        {/*<a href="/">
          Home
        </a>*/}
        {/*</div>*/}
      </a>
      <nav>
        <a href="/" class="header-link">
          Work
        </a>
        <a href="/about" class="header-link">
          About
        </a>
        <a href="/contact" class="header-link">
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
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
        <MainFooter />
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
