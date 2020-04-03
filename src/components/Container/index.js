import React from "react";
import styles from "./style.conatiner";
import { IconButton } from "@material-ui/core";
import NoteIcon from "@material-ui/icons/Notes";
import ThemeToggleIcon from "@material-ui/icons/Brightness4";

const Container = ({ children }) => {
  const classes = styles();

  return (
    <>
      <div className={classes.navbar}>
        <div>
          <IconButton className={classes.navbarIcon}>
            <NoteIcon />
          </IconButton>
          <h3>NotePad</h3>
        </div>
        <div>
          <IconButton className={classes.toggleThemeIcon}>
            <ThemeToggleIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.conatiner}>
        <div className={classes.menuContainer}>Menu</div>
        <div className={classes.contentContainer}>{children}</div>
      </div>
    </>
  );
};

export default Container;
