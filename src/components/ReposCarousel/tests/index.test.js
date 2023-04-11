import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { RepoCard } from '../';

describe('RepoCard', () => {
  it('renders properly', async () => {
    const repos = [
      {
        id: 1,
        html_url: 'html1',
        name: 'repo1',
        owner: 'owner1',
        description: 'description1',
      }
    ];

    render(
      <RepoCard
        repo={{
          id: 1,
          html_url: 'html1',
          name: 'repo1',
          owner: 'owner1',
          description: 'description1',
        }}
        bookmarked={true}
      />
    );

    const repoCard = screen.getByTestId('repo-card');
    expect(repoCard).toBeInTheDocument();

    const anchorHTMLUrl = screen.getByTestId('anchor-html-url');
    expect(anchorHTMLUrl).toBeInTheDocument();

    const infoDiv = screen.getByTestId('info-div');
    expect(infoDiv).toBeInTheDocument();

    const iconDiv = screen.getByTestId('icon-div');
    expect(iconDiv).toBeInTheDocument();

    const githubLinkSvg = screen.getByTestId('github-link-svg');
    expect(githubLinkSvg).toBeInTheDocument();

    const nameDiv = screen.getByTestId('name-div');
    expect(nameDiv).toBeInTheDocument();

    const nameSpan = screen.getByTestId('name-span');
    expect(nameSpan).toBeInTheDocument();

    const userDiv = screen.getByTestId('user-div');
    expect(userDiv).toBeInTheDocument();

    const ownerSpan = screen.getByTestId('owner-span');
    expect(ownerSpan).toBeInTheDocument();

    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();

    const starButton = screen.getByTestId('star-button');
    expect(starButton).toBeInTheDocument();

    const starSvg = screen.getByTestId('star-svg');
    expect(starSvg).toBeInTheDocument();
  });
});