import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";
import { getConfig } from "./config";
import header from "./components/Navbar";
import Footer from './components/Footer';
import App from './App';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
  scope: "read:users"
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
  <StrictMode>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </StrictMode>
);
