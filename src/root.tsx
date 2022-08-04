import { App } from './app/App';

import './global.css';

export default () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Community</title>
        <meta property="og:url" content="https://www.qwikcommunity.com" />
        <meta property="og:title" content="Qwik Community" />
        <meta property="og:description" content="Check out all the Qwik communities around the world" />
        <meta property="og:image" content="https://www.qwikcommunity.com/qwik-community.jpg" />
        <meta property="og:image:alt" content="Qwik Community" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Qwik Community" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qwik Community" />
        <meta name="twitter:description" content="Check out all the Qwik communities around the world" />
        <meta name="twitter:image" content="https://www.qwikcommunity.com/qwik-community.jpg" />
        <meta name="twitter:image:alt" content="Qwik Community" />
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};
