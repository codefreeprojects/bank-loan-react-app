import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useField } from "formik";

export const TextInput = (props) => {
  const [field] = useField(props.name);
  return <TextField {...props} {...field} />;
};

export const SelectInput = ({ options, ...props }) => {
  const [field] = useField(props.name);
  return (
    <FormControl fullWidth>
      <InputLabel id={"demo-simple-select-label-" + props.name}>
        {props.label}
      </InputLabel>
      <Select
        {...props}
        {...field}
        labelId={"demo-simple-select-label-" + props.name}
      >
        {options.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
