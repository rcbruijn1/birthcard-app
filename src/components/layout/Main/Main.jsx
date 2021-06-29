import PropTypes from 'prop-types';

// Style
import { useMainStyles } from './Main.style';

const Main = ({ children }) => {
  const classes = useMainStyles();

  return (
    <div className={`${classes.root} ${classes.scrollbar}`}>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;