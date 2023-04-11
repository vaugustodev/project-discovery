import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FormInput from '../';

describe('FormInput', () => {
  it('renders properly with no defaultValue', () => {
    const inputName = 'test';
    render(<FormInput label="test" name={inputName} type="text" />);

    const formInput = screen.getByTestId(`form-input-${inputName}`);
    expect(formInput).toBeInTheDocument();

    const formInputLabel = screen.getByTestId(`form-input-label-${inputName}`);
    expect(formInputLabel).toBeInTheDocument();

    const formInputInput = screen.getByTestId(`form-input-input-${inputName}`);
    expect(formInputInput).toBeInTheDocument();

    expect(formInputInput.value).toBe('');
  });

  it('renders properly with defaultValue', () => {
    const inputName = 'test';
    const defaultValue = 'default test value';
    render(<FormInput label="test" name={inputName} type="text" defaultValue={defaultValue} />);

    const formInput = screen.getByTestId(`form-input-${inputName}`);
    expect(formInput).toBeInTheDocument();

    const formInputLabel = screen.getByTestId(`form-input-label-${inputName}`);
    expect(formInputLabel).toBeInTheDocument();

    const formInputInput = screen.getByTestId(`form-input-input-${inputName}`);
    expect(formInputInput).toBeInTheDocument();

    expect(formInputInput.value).toBe(defaultValue);
  });
});