import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import LogoSvg from '../';

describe('LogoSvg', () => {
  it('renders properly', () => {
    render(<LogoSvg />);
    const logoSvg = screen.getByTestId('logo-svg');
    expect(logoSvg).toBeInTheDocument();
  })
});