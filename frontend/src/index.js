import * as ReactDOM from 'react-dom/client';
import App from './App';

import 'normalize.css';
import 'reset.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
