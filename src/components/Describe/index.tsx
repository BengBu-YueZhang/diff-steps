import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    describe: {
      fontSize: `17px`,
      lineHeight: `1.7`,
      marginTop: `20px`,
    },
  }),
);

const Describe: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();
  return <p className={classes.describe}>{ children }</p>
}

export default Describe;