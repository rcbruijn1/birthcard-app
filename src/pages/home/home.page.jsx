import { useHistory } from 'react-router-dom';

// Core
import { Grid } from '@material-ui/core';
import { ItemCard, Main } from '../../components';

// Routing
import { COLLECTION_PATH, CREATOR_PATH } from '../../routes/paths';

const HomePage = () => {
  const history = useHistory();

  return (
    <Main>
      <Grid container spacing={3}>
        <ItemCard
          label="Zelf samenstellen"
          onClick={() => history.push(CREATOR_PATH)}
          breakpoints={{ xs: 12, md: 4 }}
        />
        <ItemCard
          label="Collectie jongens"
          onClick={() => history.push(COLLECTION_PATH('boys'))}
          breakpoints={{ xs: 12, md: 4 }}
        />
        <ItemCard
          label="Collectie meisjes"
          onClick={() => history.push(COLLECTION_PATH('girls'))}
          breakpoints={{ xs: 12, md: 4 }}
        />
      </Grid>
    </Main>
  )
};

export default HomePage;