import CodeBlock from "../components/CodeBlock";
import {
  awsExports,
  importAmplify,
  amplifyInitialize,
  authenticator,
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
        <p>To build your own app using AWS, follow these instructions:</p>
        <div className="step-list">
          <ol>
            <li>
              First, make sure you have an AWS account. If you don't, create one
              by visiting{" "}
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                AWS
              </a>{" "}
              and following the instructions.
            </li>
            <li>
              Once you have an AWS account, go to the{" "}
              <a
                href="https://console.aws.amazon.com/"
                target="_blank"
                rel="noreferrer"
              >
                AWS Management Console
              </a>{" "}
              and sign in.
            </li>
            <li>
              In the console, navigate to the Cognito service by selecting
              "Services" from the menu at the top of the screen and searching
              for "Cognito". Select "Cognito" when it appears in the search
              results.
            </li>
            <li>In the Cognito dashboard, click on "Create user pool".</li>
            <li>
              Follow the on page instructions and select the settings that you
              require for your app. When finished, review your selections and
              click "Create user pool".
            </li>
            <li>
              Once the user pool is created, click on it and follow the{" "}
              <a
                href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html"
                target="_blank"
                rel="noreferrer"
              >
                instruction here
              </a>{" "}
              to create an app integration.
            </li>
            <li>
              In the root directory of your React app, install the AWS Amplify
              library by running the command{" "}
              <code>npm install aws-amplify</code>.
            </li>
            <li>
              Next, install the AWS Amplify React library by running the command{" "}
              <code>npm install aws-amplify-react</code>.
            </li>
            <li>
              In the root directory of your React app, create a new file called
              "aws-exports.js". Copy the following code into this file,
              replacing the values with your own:
              <CodeBlock text={awsExports} />
              Replace the placeholders with your actual values, which you can
              find in your Cognito console and AppSync console.
            </li>
            <li>
              In your app's "src/index.js" file, import the following:
              <CodeBlock text={importAmplify} />
            </li>
            <li>
              Initialize Amplify by adding the following code to the same file:
              <CodeBlock text={amplifyInitialize} />
            </li>
            <li>
              To display the Amplify UI Authenticator component, add the
              following lines of code to the application's entry point file
              (App.js):
              <CodeBlock text={authenticator} />
            </li>
            <li>
              Finally, start your app by running the command{" "}
              <code>npm start</code> in your terminal. Your app should now be
              configured to use AWS Cognito for authentication.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
