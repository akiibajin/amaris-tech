import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextEditorForControlled } from "../../interfaces/components/TextEditor";

const MUITextEditorControlled = ({
  name,
  control,
  defaultValue,
  rules,
  errors,
  label,
  type,
  color,
}: TextEditorForControlled) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    defaultValue={defaultValue}
    render={({ field }) => (
      <TextField
        {...field}
        type={type}
        color={errors[name]?.type ? "error" : color}
        helperText={
          errors[name]?.type === "required" ||
          errors[name]?.type === "pattern" ||
          errors[name]?.type === "min" ||
          errors[name]?.type === "max"
            ? errors[name].message
            : ""
        }
        label={label}
      />
    )}
  />
);

export default MUITextEditorControlled;
