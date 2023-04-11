import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import App from '../';

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useLoaderData: () => { return { loadedUsername: 'username' } },
}));

describe('App', () => {
  it('renders properly', () => {
    render(<App />);

    const appNavbar = screen.getByTestId('navbar');
    expect(appNavbar).toBeInTheDocument();

    const appOutletDiv = screen.getByTestId('app-outlet-div');
    expect(appOutletDiv).toBeInTheDocument();
  });
});