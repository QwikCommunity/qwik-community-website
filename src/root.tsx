import { App } from './app/App';

import './global.css';

export default () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Community</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};
