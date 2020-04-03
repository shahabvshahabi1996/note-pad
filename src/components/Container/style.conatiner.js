import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  navbar: {
    width: "100%",
    borderBottom: "1px solid #eee",
    height: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& div": {
      display: "flex",
      alignItems: "center"
    },
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  navbarIcon: {
    display: "none"
  },
  toggleThemeIcon: {
    color: theme.palette.primary.contrastText
  },
  conatiner: {
    display: "flex",
    width: "100vw",
    height: "90vh"
  },
  contentContainer: {
    width: "80%",
    height: "100%",
    borderLeft: "1px solid #eee",
    padding: theme.spacing(3)
  },
  menuContainer: {
    width: "20%"
  },
  "@media screen and (max-width: 600px)": {
    menuContainer: {
      width: 0,
      display: "none"
    },
    contentContainer: {
      width: "100%"
    },
    navbarIcon: {
      display: "initial",
      color: theme.palette.primary.contrastText
    }
  }
}));
