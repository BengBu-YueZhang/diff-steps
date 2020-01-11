import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      flexGrow: 1,
    },
    headerTitle: {
      flexGrow: 1,
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.headerTitle}>
            Diff Steps
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;