import React from 'react'
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './app/App';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from './theme/theme';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <ThemeProvider theme={createTheme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
