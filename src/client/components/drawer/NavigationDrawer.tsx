import * as React from 'react';
import {
  createStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';

interface NavigationDrawerProps extends WithStyles<typeof styles> {}

interface NavigationDrawerState {
  open: boolean;
}

const styles = (theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
});

class NavigationDrawer extends React.Component<NavigationDrawerProps, NavigationDrawerState> {
  constructor (props: NavigationDrawerProps) {
    super(props);

    this.state = {
      open: true,
    };
  }

  render () {
    const { classes } = this.props;
    return (
      <Drawer
        variant={'permanent'}
        open={this.state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(NavigationDrawer);
