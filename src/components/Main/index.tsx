import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    main: {
      margin: `40px auto`,
      width: `100%`,
      maxWidth: `960px`
    },
  }),
);

const Main: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();
  return <div className={classes.main}>{ children }</div>
}

export default Main;