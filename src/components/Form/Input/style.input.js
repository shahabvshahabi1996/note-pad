import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => {
  return {
    Input: {
      border: "none",
      inset: "none",
      outline: "none",
      width: "100%",
      "&:focus": {
        border: "none",
        inset: "none",
        outline: "none"
      }
    },
    InputIcon: {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(1)
    },
    InputContainer: {
      display: "flex",
      alignItems: "center",
      width: "98%",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: 25,
      padding: theme.spacing(1)
    }
  };
});
