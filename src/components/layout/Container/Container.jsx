import PropTypes from 'prop-types';

// Core
import { Box, Typography } from "@material-ui/core";

const Container = ({ title, children }) => {

  return (
    <Box display="flex" flexDirection="column" boxShadow={2}>
      <Box p={3} width="100%" bgcolor="#BFA3A7">
        <Typography color="textSecondary">
          {title}
        </Typography>
      </Box>
      <Box p={3}>
        {children}
      </Box>
    </Box>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
}

export default Container;