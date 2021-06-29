// Core
import { Box, Grid } from '@material-ui/core';
import { ItemCard, Main } from '../../components';

// Assets
import logo from '../../logo.svg';

const CollectionPage = () => (
  <Main>
    <Box mx={3}>
      <Grid container spacing={3}>
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
        <ItemCard
          onClick={() => console.log('klik')}
          image={logo}
        />
      </Grid>
    </Box>
  </Main>
);

export default CollectionPage;