import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { TolgeeProvider } from "@tolgee/react";

ReactDOM.render(
  <React.StrictMode>
    <TolgeeProvider
      staticData={{
        en: () => import("./langs/en.json"),
        ru: () => import("./langs/ru.json"),
      }}
      loadingFallback={<>Loading...</>}
    >
      <App />
    </TolgeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
