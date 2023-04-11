import PropTypes from 'prop-types';

import {
  StyledFormInput,
  StyledLabel,
  StyledInput,
} from "./style";

const propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <StyledFormInput data-testid={`form-input-${name}`}>
      <StyledLabel data-testid={`form-input-label-${name}`}>
        {label}
        <hr/>
        <StyledInput data-cy={`input-${name}`} data-testid={`form-input-input-${name}`} name={name} type={type} defaultValue={defaultValue || null} />
      </StyledLabel>
    </StyledFormInput>
  );
};

FormInput.propTypes = propTypes;

export default FormInput;