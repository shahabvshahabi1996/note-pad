import React from "react";
import styles from "./style.conatiner";
import { IconButton, Tooltip } from "@material-ui/core";
import NoteIcon from "@material-ui/icons/Notes";
import ThemeToggleIcon from "@material-ui/icons/Brightness4";
import AddNoteIcon from "@material-ui/icons/PostAdd";
import { connect } from "react-redux";
import PropsTypes from "prop-types";
import { toggleTheme } from "../../actions/settings";
import CustomInput from "../Form/Input";

const Container = ({ children, settings, toggleTheme }) => {
  const classes = styles();
  const [menuIsOpen, openMenu] = React.useState(false);

  const toggleMenu = () => {
    return openMenu(!menuIsOpen);
  };

  return (
    <>
      <div className={classes.navbar}>
        <div>
          <Tooltip title={"Notes"}>
            <IconButton onClick={toggleMenu} className={classes.navbarIcon}>
              <NoteIcon />
            </IconButton>
          </Tooltip>
          <h3>NotePad</h3>
        </div>
        <div>
          <Tooltip title={"Add Note"}>
            <IconButton className={classes.Icon}>
              <AddNoteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={"Toggle Theme"}>
            <IconButton
              onClick={() => toggleTheme(settings.theme)}
              className={classes.Icon}
            >
              <ThemeToggleIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className={classes.conatiner}>
        <div
          className={`${classes.menuContainer} ${menuIsOpen ? "active" : ""}`}
        >
          <div className={classes.searchBox}>
            <CustomInput />
          </div>
          <div className={classes.notes}>
            <div className={"active"}>Note #1</div>
            <div>Note #2</div>
          </div>
        </div>
        <div className={classes.contentContainer}>{children}</div>
      </div>
    </>
  );
};

Container.propTypes = {
  children: PropsTypes.node.isRequired,
  settings: PropsTypes.object.isRequired,
  toggleTheme: PropsTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

export default connect(mapStateToProps, { toggleTheme })(Container);
