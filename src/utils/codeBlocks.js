export const clone = `git clone git@github.com:magiclabs/oidc-auth0-demo.git`;

export const install = `npm install
// or
yarn add`;

export const start = `npm run dev
// or
yarn dev`;

export const envSetup = `REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_MAGIC_PUBLISHABLE_API_KEY=
REACT_APP_MAGIC_PROVIDER_ID=`;

export const magicConstructor = `const magicClient = new Magic(<Magic_Publishable_API_Key>, extensions: [new OpenIdExtension()])`;

export const magicOidc = `const did = await magic.openid.loginWithOIDC({
    jwt: <Auth0_OIDC_Token>,
    providerId: <Magic_Provider_ID>
})`;
