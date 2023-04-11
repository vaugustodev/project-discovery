import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import ErrorPage from '../';

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useRouteError: () => jest.fn(),
}));

describe('ErrorPage', () => {
  it('renders properly', () => {
    render(<ErrorPage />);

    const errorPage = screen.getByTestId('error-page');
    expect(errorPage).toBeInTheDocument();

    const errorPageHeading = screen.getByTestId('error-page-heading');
    expect(errorPageHeading).toBeInTheDocument();

    const errorPageParagraph = screen.getByTestId('error-page-paragraph');
    expect(errorPageParagraph).toBeInTheDocument();

    const errorPageStatus = screen.getByTestId('error-page-status');
    expect(errorPageStatus).toBeInTheDocument();
  });
});