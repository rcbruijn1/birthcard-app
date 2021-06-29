import PropTypes from 'prop-types';

// Core
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';

const ItemCard = ({ image, onClick, label, breakpoints }) => (
  <Grid
    item 
    xs={breakpoints.xs} 
    sm={breakpoints.sm} 
    md={breakpoints.md}
  >
    <Card>
      <CardActionArea>
        <CardMedia
          component={image ? "img" : Box}
          alt="preview"
          height={image ? "300" : 300}
          width="auto"
          image={image}
          onClick={onClick}
        />
        {label && (
          <Box p={2}>
            <Typography align="center">
              {label}
            </Typography>
          </Box>
        )}
      </CardActionArea>
    </Card>
  </Grid>
);

ItemCard.defaultProps = {
  breakpoints: {
    xs: 6,
    sm: 4,
    md: 3,
  },
};

ItemCard.propTypes = {
  image: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number, 
    sm: PropTypes.number,
    md: PropTypes.number,
  }),
};

export default ItemCard;