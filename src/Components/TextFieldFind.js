import React from "react";
/**
 * Estas importando bootstrap y material ui, esto es una super red-flag en front end.
 * Materia-ui es bueno pero te pierdes el entender como funcioan los componentes. 
 */
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import "../Styles/textFieldFind.css"

/**
 * RF:
 * NOOO!!!!
 * Jamas de los jamases uses css dentro del javascript 
 */
var styleL = {
  position: "absolute",
  top: "34%",
  left: "32%"
};


/**
 * RF:
 * NOOO!!!!
 * Igual, la razon es que al usar estilo con js, lo que haces es
 * crear multiples puntos de css. Haciendo que el browser deba hacer
 * un repaint.
 */
const useStyles = makeStyles(theme => ({
  input: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className ="textFieldFind">
      <Paper component="form" className="root">
        <InputBase
          className={classes.input}
          placeholder="¿Algún antojo en específico?"
          inputProps={{ "aria-label": "search google maps" }}
        />

        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
