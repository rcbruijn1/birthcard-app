import { Redirect, Route, Switch } from 'react-router-dom';

// Core
import { Box } from '@material-ui/core';
import { AppBar, Footer } from '../components';

// Routing
import { PUBLIC_ROUTES } from '../routes/routes';
import { HOME_PATH } from '../routes/paths';

const App = () => (
  <Box height={{ xs: '100%', md: '100vh' }} position="relative" overflow="hidden">
    <AppBar/>

    <Switch>
      {PUBLIC_ROUTES.map(route => <Route {...route} />)}
      <Redirect to={HOME_PATH} />
    </Switch>

    <Footer />
  </Box>
  );

export default App;
