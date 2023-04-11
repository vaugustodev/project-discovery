import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import StarSvg from '../';

describe('StarSvg', () => {
  it('renders properly', () => {
    render(<StarSvg bookmarked={false} />);
    const starSvg = screen.getByTestId('star-svg');
    expect(starSvg).toBeInTheDocument();
  })
});