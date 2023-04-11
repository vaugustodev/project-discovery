import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import FormButton from '../';

describe('FormButton', () => {
  it('renders properly', () => {
    const buttonText = 'test';
    render(<FormButton text={buttonText} />);
    const formButton = screen.getByTestId(`form-button-${buttonText}`);
    expect(formButton).toBeInTheDocument();
    expect(formButton.textContent).toBe(buttonText);
  })
});