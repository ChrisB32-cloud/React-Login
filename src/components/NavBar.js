import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { withLanguageContext } from '../contexts/LanguageContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../styles/NavBarStyles';

// - static contextType = ThemeContext;
//  - What this tells the class to do is look up
// and see if you're nested in a themeContext Provider. If you
// find the nearest one.
//  - We can have multiple context as well
//  - It's going to look up the tree to find themeContext

class NavBar extends Component {
  static contextType = ThemeContext;

  render() {
    const { classes } = this.props;
    const { isDarkMode, toggleDarkMode } = this.context;
    // console.log(isDarkMode);

    return (
      <div className={classes.root}>
        <AppBar
          style={{ background: isDarkMode ? '#818b8f' : '#4c535c' }}
          position="static"
        >
          <Toolbar>
            <IconButton
              style={{ backgroundColor: '#4c535c' }}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              {/* <MenuIcon /> */}
              <span>🇫🇷</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              React Login
            </Typography>
            <Switch style={{ color: 'black' }} onClick={toggleDarkMode} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(NavBar));
