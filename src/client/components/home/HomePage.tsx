import * as React from 'react';
import { createStyles, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import TitleBar from '../titleBar/TitleBar';
import NavigationDrawer from '../drawer/NavigationDrawer';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

interface HomePageProps extends WithStyles<typeof styles> {}

class HomePage extends React.Component<HomePageProps> {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TitleBar />
        <NavigationDrawer />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography variant={'display1'}>
            It's a party!!!
          </Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
