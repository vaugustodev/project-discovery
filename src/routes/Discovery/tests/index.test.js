import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Discovery from '../';

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useLoaderData: () => {
    return { loadedUsername: 'username', loadedCurrentUserOptions: {} };
  },
}));

describe('Discovery', () => {
  it('renders properly', () => {
    render(<Discovery />);

    const bookmarkedSection = screen.getByTestId('bookmarked-section-heading');
    expect(bookmarkedSection).toBeInTheDocument();

    const toggles = screen.getByTestId('toggles');
    expect(toggles).toBeInTheDocument();
  });
});