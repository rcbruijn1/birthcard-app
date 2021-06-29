import { useHistory, useLocation } from 'react-router';

// Core
import { 
  Box, 
  Button, 
  TextField, 
  Toolbar, 
  Typography 
} from '@material-ui/core';

// Utils
import { HOME_PATH } from '../../../routes/paths';

// Assets
import { ArrowBack, Search } from '@material-ui/icons';

const AppBar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Box display="flex" flexDirection="column">
      <Toolbar component={Box} justifyContent="space-between" py={3}>
        <Typography variant="h5">
          Babykaartje
        </Typography>
        <TextField
          margin="dense"
          variant="outlined"
          placeholder="Zoek..."
          InputProps={{
            startAdornment: <Search />,
          }}
        />
      </Toolbar>

      <Toolbar variant="dense" component={Box} borderTop="1px solid #e6e6e6" borderBottom="1px solid #e6e6e6" mx={3} py={1.5} disableGutters>
          {!location.pathname.includes(HOME_PATH) && (
            <Button startIcon={<ArrowBack />} onClick={() => history.push(HOME_PATH)}>
              Home
            </Button>
          )}
      </Toolbar>
    </Box>
  );
};

export default AppBar;
