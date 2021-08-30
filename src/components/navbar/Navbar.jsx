import { Grid } from "@material-ui/core";
import Logo from "../../shared/components/Logo";
import SearchInput from "../../shared/components/SearchInput";
import "./css/navbar.scss";
import { useNav } from "./hooks/useNav";

const Navbar = ({ setSearchResults, disabled }) => {
  const { setSearch, searchInput } = useNav(setSearchResults);

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
        <SearchInput
          value={searchInput}
          onChange={({ target: { value } }) => setSearch(value)}
          disabled={disabled}
        />
      </Grid>
    </Grid>
  );
};

export default Navbar;
