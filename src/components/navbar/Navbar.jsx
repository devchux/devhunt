import { Grid, makeStyles } from "@material-ui/core";
import Logo from "../../shared/components/Logo";
import NumberInput from "../../shared/components/NumberInput";
import SearchInput from "../../shared/components/SearchInput";
import "./css/navbar.scss";

const Navbar = () => {
  const styles = makeStyles({
    root: {
      // color: "red",
      // border: "2px solid red",
    },
  });

  const classes = styles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      className="form navbar-wrapper"
    >
      <Grid item sm={6}>
        <Logo />
      </Grid>
      <Grid item sm={6} className="navbar-grid-input-wrapper">
        <SearchInput className={classes.root} />
      </Grid>
    </Grid>
  );
};

export default Navbar;
