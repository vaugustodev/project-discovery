import PropTypes from 'prop-types';

import { StyledFormButton } from './style';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const FormButton = ({ text }) => {
  return (
    <StyledFormButton data-cy={`button-${text}`} data-testid={`form-button-${text}`} >{text}</StyledFormButton>
  );
};

FormButton.propTypes = propTypes;

export default FormButton;