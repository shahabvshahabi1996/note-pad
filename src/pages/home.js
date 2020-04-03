import React from "react";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import marked from "marked";

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

const useStyle = makeStyles(theme => ({
  Icon: {
    color: "#333"
  }
}));

/**
 * data -> {
 * id : string,
 * title : string,
 * content : string
 * }
 *
 */

const Home = ({ data }) => {
  const [edit, setEdit] = React.useState(false);

  const toggleEdit = () => {
    return setEdit(!edit);
  };

  const classes = useStyle();
  return (
    <div className="p-30">
      <h1 className="data-title">
        Note #1{" "}
        <div>
          <IconButton onClick={toggleEdit} className={classes.Icon}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={toggleEdit} className={classes.Icon}>
            <EditIcon />
          </IconButton>
        </div>
      </h1>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: marked(`### Tasks \n  **Wake up** soon`)
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    note: state.note
  };
};

export default connect(mapStateToProps)(Home);
