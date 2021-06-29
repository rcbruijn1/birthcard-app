// Core
import * as Paths from './paths';
import * as Pages from '../pages';

/** Private */
export const PRIVATE_ROUTES = () => [];

/** Public */
export const PUBLIC_ROUTES = [
  {
    exact: true,
    key: Paths.HOME_PATH,
    path: Paths.HOME_PATH,
    render: props => <Pages.HomePage {...props} />,
  },
  {
    exact: true,
    key: Paths.CREATOR_PATH,
    path: Paths.CREATOR_PATH,
    render: props => <Pages.CreatorPage {...props} />,
  },
  {
    key: Paths.COLLECTION_PATH(),
    path: Paths.COLLECTION_PATH(),
    render: props => <Pages.CollectionPage {...props} />,
  },
];
