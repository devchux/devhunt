import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "../css/searchInput.scss";
import SearchInputHook from "../hooks/SearchInput";

const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    "&$textFieldFocused $textFieldNotchedOutline": {
      borderColor: theme.palette.common.black,
    },
  },
  textFieldFocused: {},
  textFieldNotchedOutline: {},
}));

const SearchInput = ({ value, onChange, className }) => {
  const { onFocus, onBlur } = SearchInputHook();
  const classes = useStyles();
  return (
    <TextField
      className={`search-input ${className}`}
      type="search"
      value={value}
      onChange={onChange}
      variant="outlined"
      id="input-with-icon-textfield"
      placeholder="Search"
      onFocus={onFocus}
      onBlur={onBlur}
      InputProps={{
        classes: {
          root: classes.textFieldRoot,
          focused: classes.textFieldFocused,
          notchedOutline: classes.textFieldNotchedOutline,
        },
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
