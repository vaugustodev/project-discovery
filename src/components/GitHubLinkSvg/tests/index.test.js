import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import GitHubLinkSvg from '../';

describe('GitHubLinkSvg', () => {
  it('renders properly', () => {
    render(<GitHubLinkSvg />);
    const gitHubLinkSvg = screen.getByTestId('github-link-svg');
    expect(gitHubLinkSvg).toBeInTheDocument();
  })
});