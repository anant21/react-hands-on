import { FormInputLabel, Input, Group } from "./form-input.styles";
import ErrorDisplay from "../error-display/error-display.component";

const FormInput = ({ label, error, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
      <ErrorDisplay error={error} />
    </Group>
  );
};

export default FormInput;
