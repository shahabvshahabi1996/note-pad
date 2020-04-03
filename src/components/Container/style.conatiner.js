import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => {
  return {
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
    Icon: {
      color: theme.palette.primary.contrastText
    },
    conatiner: {
      display: "flex",
      width: "100vw",
      height: "90vh",
      position: "relative"
    },
    contentContainer: {
      width: "80%",
      height: "100%",
      borderLeft: "1px solid #eee"
    },
    menuContainer: {
      width: "20%",
      height: "90vh",
      backgroundColor: "#fff"
    },

    notes: {
      "& div": {
        padding: theme.spacing(3),
        borderBottom: "1px solid #eee",
        cursor: "pointer",
        transition: "color 0.3s , background-color 0.3s ",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          fontWeight: "bold"
        },
        "&.active": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          fontWeight: "bold"
        }
      }
    },
    active: {},
    searchBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      borderBottom: "1px solid #eee",
      padding: "5px 2px"
    },
    "@media screen and (max-width: 600px)": {
      menuContainer: {
        position: "absolute",
        zIndex: 1,
        width: "60%",
        top: 0,
        left: -500,
        borderRight: "1px solid #eee",
        transition: "left 0.5s",
        "&.active": {
          left: 0
        }
      },
      contentContainer: {
        width: "100%"
      },
      navbarIcon: {
        display: "initial",
        color: theme.palette.primary.contrastText
      }
    }
  };
});
