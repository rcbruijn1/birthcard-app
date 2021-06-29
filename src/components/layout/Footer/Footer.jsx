// Core
import { Box, IconButton } from '@material-ui/core';

// Assets
import { Facebook, Instagram, Pinterest } from '@material-ui/icons';

const Footer = () => (
  <Box width="100%" display="flex" justifyContent="center" position="absolute" bottom={0} left={0} p={3}>
    <IconButton>
      <Facebook />
    </IconButton>
    <IconButton>
      <Instagram />
    </IconButton>
    <IconButton>
      <Pinterest />
    </IconButton>
  </Box>
);

export default Footer;