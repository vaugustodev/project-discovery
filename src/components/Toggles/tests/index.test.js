import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { theme } from '../../../styles/theme';
import Toggles from '../';

describe('Toggles', () => {
  it('renders properly, and each Toggle has the correct color', () => {
    const currentUserOptions = {
      topics: {
        'TypeScript': '',
        'CSS': ''},
    };

    render(<Toggles handleToggleClick={jest.fn()} currentUserOptions={currentUserOptions} />);

    const toggles = screen.getByTestId('toggles');
    expect(toggles).toBeInTheDocument();

    const togglesHeading = screen.getByTestId('toggles-heading');
    expect(togglesHeading).toBeInTheDocument();

    const vueToggle = screen.getByTestId('toggle-vue');
    expect(vueToggle).toBeInTheDocument();
    expect(vueToggle).toHaveStyle(`background-color: ${theme.colors.headline}`);

    const typeScriptToggle = screen.getByTestId('toggle-typescript');
    expect(typeScriptToggle).toBeInTheDocument();
    expect(typeScriptToggle).toHaveStyle(`background-color: ${theme.colors.accent}`);

    const javaScriptToggle = screen.getByTestId('toggle-javascript');
    expect(javaScriptToggle).toBeInTheDocument();
    expect(javaScriptToggle).toHaveStyle(`background-color: ${theme.colors.headline}`);

    const goToggle = screen.getByTestId('toggle-go');
    expect(goToggle).toBeInTheDocument();
    expect(goToggle).toHaveStyle(`background-color: ${theme.colors.headline}`);

    const cssToggle = screen.getByTestId('toggle-css');
    expect(cssToggle).toBeInTheDocument();
    expect(cssToggle).toHaveStyle(`background-color: ${theme.colors.accent}`);

    const nodeToggle = screen.getByTestId('toggle-node');
    expect(nodeToggle).toBeInTheDocument();
    expect(nodeToggle).toHaveStyle(`background-color: ${theme.colors.headline}`);
  });
});