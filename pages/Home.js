import CodeBlock from "../components/CodeBlock";
import {
  awsExports,
  importAmplify,
  amplifyInitialize,
  authenticator,
} from "../utils/codeBlocks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="logo-container">
        <img className="logo" src="/magic-logo.png" alt="Magic logo" />{" "}
        <p className="plus-sign">+</p>
        <img
          className="logo"
          src="aws-cognito-logo.png"
          alt="Amazon Cognito logo"
        />
      </div>
      <h1 className="home-title">
        Magic Wallet Services
        <br /> <span>with</span> <br /> Amazon Cognito
      </h1>
      <hr className="divider" />
      <section id="demo">
        <h2>Try It Out</h2>
        <p>
          You can try out this demo integration by clicking "Magic Wallet" in
          the top-left corner of this page or signing in below and registering a
          new account.
        </p>
        <button
          className="sign-in-button"
          onClick={() => navigate("/magic-wallet")}
        >
          Sign In
        </button>
      </section>
      <section className="info-for-mws">
        <h2>What's Needed for MWS Integration</h2>
        <ul>
          <li>
            Issuer Domain:{" "}
            <span className="example">
              https://cognito-idp.
              <span className="aws-variable">YOUR_AWS_REGION</span>
              .amazonaws.com/
              <span className="aws-variable">YOUR_USER_POOL_ID</span>/
            </span>
          </li>
          <li>
            Client ID:{" "}
            <span className="example">e.g. 62t7cb1mddee60mocn9holvmef</span>
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
