import CodeBlock from "../components/CodeBlock";
import {
  clone,
  install,
  start,
  envSetup,
  magicConstructor,
  magicOidc,
} from "../utils/codeBlocks";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="home-container">
      <div className="logo-container">
        <img className="logo" src="/magic-logo.png" alt="Magic logo" />{" "}
        <p className="plus-sign">+</p>
        <img className="logo" src="auth0-logo.png" alt="Auth0 logo" />
      </div>
      <h1 className="home-title">
        Magic Wallet Services
        <br /> <span>with</span> <br /> Auth0
      </h1>
      <hr className="divider" />
      <section id="demo">
        <h2>Try It Out</h2>
        <p>
          You can try out this demo integration by clicking "Magic Wallet" in
          the top-left corner of this page or signing in below and registering a
          new account.
        </p>
        <button className="sign-in-button" onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      </section>
      <section className="info-for-mws">
        <h2>What's Needed for MWS Integration</h2>
        <ul>
          <li>
            Auth0 Domain:{" "}
            <span className="example">
              https://
              <span className="auth0-variable">YOUR_AUTH0_DOMAIN</span>
              .us.auth0.com
            </span>
          </li>
          <li>
            Auth0 Client ID:{" "}
            <span className="example">
              e.g. lfrjlWCQIqWmJv6ky5ykm00QCQGCgLe9
            </span>
          </li>
          <li>
            Magic Publishable API Key:{" "}
            <span className="example">pk_live_.....</span>
          </li>
        </ul>
      </section>
      <section id="instructions">
        <h2>Instructions</h2>
        <p>To build your own app using Auth0, follow these instructions:</p>
        <div className="step-list">
          <h3>Auth0</h3>
          <ol>
            <li>
              Create an{" "}
              <a href="https://auth0.com/" target="_blank" rel="noreferrer">
                Auth0 account
              </a>
              .
            </li>
            <li>
              Create an Auth0{" "}
              <span className="example">Single Page Web Applications</span> type
              application.
            </li>
            <li>
              Go to the settings of the Auth0 application and retain the{" "}
              <span className="example">Domain, Client ID</span> and{" "}
              <span className="example">Client Secret</span>.
            </li>
            <li>
              Under{" "}
              <span className="example">
                Applications" -> "YOUR_APP" -> "Settings"
              </span>
              , enter <span className="example">http://localhost:3000</span> in{" "}
              <span className="example">Allowed Callback URLs</span> and{" "}
              <span className="example">Allowed Logout URLs</span> under the{" "}
              <span className="example">Application URIs</span> sub-section.
            </li>
            <li>
              Explore the{" "}
              <a
                href="https://auth0.github.io/auth0-react/"
                target="_blank"
                rel="noreferrer"
              >
                @auth0/auth0-react docs
              </a>
              .
            </li>
          </ol>
          <h3>Magic</h3>
          <ol>
            <li>
              Create a{" "}
              <a href="https://magic.link/" target="_blank" rel="noreferrer">
                Magic account
              </a>
              .
            </li>
            <li>
              Create a Magic Auth application and retain the{" "}
              <span className="example">Publishable API Key</span>.
            </li>
            <li>
              Explore the{" "}
              <a
                href="https://magic.link/docs/auth/api-reference/client-side-sdks/web"
                target="_blank"
                rel="noreferrer"
              >
                Magic Web API docs
              </a>
              .
            </li>
          </ol>
          <h3>Magic MWS Setup</h3>
          <ol>
            <li>
              Contact Magic and provide the Auth0{" "}
              <span className="example">Domain</span>, Auth0{" "}
              <span className="example">Client ID</span> and{" "}
              <span className="example">Magic Publishable API Key</span>.
            </li>
            <li>
              Magic will return a <span className="example">Provider ID</span>.
              Please retain this.
            </li>
          </ol>
          <h3>Local Setup</h3>
          <ol>
            <li>
              Start by cloning this repo to your local machine:
              <CodeBlock text={clone} />
            </li>
            <li>
              To install and set up the library, run:
              <CodeBlock text={install} />
            </li>
            <li>
              Create a <code>.env</code> file and add the following variables,
              using the values obtained in our earlier steps:
              <CodeBlock text={envSetup} />
            </li>
            <li>
              Open{" "}
              <a href="http://localhost:3000" target="_blank" rel="noreferrer">
                http://localhost:3000
              </a>{" "}
              with your browser to see the result.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
