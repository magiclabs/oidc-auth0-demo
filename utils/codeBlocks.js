export const awsExports = `const awsConfig = {
  "aws_project_region": "us-east-1",
  "aws_cognito_identity_pool_id": "YOUR_COGNITO_IDENTITY_POOL_ID",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "YOUR_USER_POOL_ID",
  "aws_user_pools_web_client_id": "YOUR_APP_CLIENT_ID",
};

export default awsConfig;`;

export const importAmplify = `import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';`;

export const amplifyInitialize = `Amplify.configure(awsConfig);`;

export const authenticator = `function App() {
  return (
      <Authenticator>
          {({ signOut, user }) => (
              <div>
                  <p>Welcome {user.username}</p>
                  <button onClick={signOut}>Sign out</button>
              </div>
          )}
      </Authenticator>
  );
}`;
