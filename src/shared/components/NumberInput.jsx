import { TextField } from "@material-ui/core";

const NumberInput = ({ value, onChange, className, min, max, step }) => {
  return (
    <TextField
      type="number"
      value={value}
      onChange={onChange}
      inputProps={{ step, min, max }}
      variant="outlined"
      className={className}
    />
  );
};

export default NumberInput;
