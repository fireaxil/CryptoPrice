import * as React from 'react';
import {
  AppBar,
  createStyles,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';

const styles = (theme: Theme) => createStyles({
  menuButton: {
    marginLeft: -16,
    marginRight: 20,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

interface TitleBarProps extends WithStyles<typeof styles> {}

class TitleBar extends React.Component<TitleBarProps> {
  render () {
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar} position={'absolute'}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <Menu />
          </IconButton>
          <Typography variant={'title'}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TitleBar);
