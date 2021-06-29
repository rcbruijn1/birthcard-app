import { makeStyles } from '@material-ui/core/styles';

export const useMainStyles = makeStyles(theme => ({
  root: {
    height: `calc(100% - ${theme.components.header + theme.components.footer}px)`,
    width: `calc(100% - ${theme.spacing(6)}px)`, // twice the x axis margin
    maxWidth: 1280,
    margin: 'auto',
    marginBottom: `${theme.components.footer}px`,
    padding: theme.spacing(3, 0),
    overflowY: 'auto', 
    overflowX: 'hidden',
  },

  scrollbar: theme.mixins.scrollbar,
}));