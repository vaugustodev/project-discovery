import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import BookmarkedSection from '../';

describe('BookmarkedSection', () => {
  it('renders properly when there is no Bookmarks', () => {
    render(<BookmarkedSection currentUserOptions={null} />);

    const bookmarkedSectionHeading = screen.getByTestId('bookmarked-section-heading');
    expect(bookmarkedSectionHeading).toBeInTheDocument();

    const bookmarkedSectionInfo = screen.getByTestId('bookmarked-section-info');
    expect(bookmarkedSectionInfo).toBeInTheDocument();
  });
});

describe('BookmarkedSection', () => {
  it('renders properly when there is Bookmarks', () => {
    const currentUserOptions = {
      bookmarks: [
        {
          id: 1,
          html_url: 'html1',
          name: 'repo1',
          owner: 'owner1',
          description: 'description1',
        },
      ],
    };

    render(
      <BookmarkedSection
        currentUserOptions={currentUserOptions}
      />
    );

    const bookmarkedSectionHeading = screen.getByTestId('bookmarked-section-heading');
    expect(bookmarkedSectionHeading).toBeInTheDocument();

    const bookmarkedSectionInfo = screen.queryByText('No bookmarks.');
    expect(bookmarkedSectionInfo).not.toBeInTheDocument();
  });
});