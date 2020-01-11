import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: `33px`,
      lineHeight: 1.4,
      color: `#000`,
      marginTop: `30px`,
      marginBottom: `10px`
    },
  }),
);

const Title: React.FC = (props) => {
  const { children } = props;
  const classes = useStyles();
  return <h3 className={classes.title}>{ children }</h3>
}

export default Title;