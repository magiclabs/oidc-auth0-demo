import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import WalletPage from "./pages/Wallet";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="nav-bar">
          <a
            className="logo-link"
            href="https://magic.link/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="magic-horizontal"
              src="/magic_logo_horizontal.png"
              alt="magic logo"
            />
          </a>
          <div className="nav-links">
            <NavLink className="nav-link" exact="true" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/magic-wallet">
              Magic Wallet
            </NavLink>
            <NavLink
              className="nav-link"
              to="https://magic.link/docs/home/welcome"
              target="_blank"
            >
              Docs
            </NavLink>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magic-wallet" element={<WalletPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
