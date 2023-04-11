import PropTypes from 'prop-types';

import RepoCarousel from '../ReposCarousel';
import { StyledBookmarkedInfoDiv } from './style';

const propTypes = {
  currentUserOptions: PropTypes.shape({
    bookmarks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      html_url: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      owner: PropTypes.string,
    })),
    topics: PropTypes.objectOf(PropTypes.string),
  }),
  handleRepoBookmark: PropTypes.func,
};

const BookmarkedSection = ({
  currentUserOptions,
  handleRepoBookmark,
}) => {
  const renderRepoCarousel = () => {
    if (
      currentUserOptions &&
      currentUserOptions.bookmarks &&
      Object.keys(currentUserOptions.bookmarks).length > 0) {
      return <RepoCarousel
        repos={Object.values(currentUserOptions.bookmarks)}
        handleRepoBookmark={handleRepoBookmark}
        bookedmarkedRepoIds={currentUserOptions.bookmarks.map(r => r.id)}
      />;
    }
    return (
      <StyledBookmarkedInfoDiv data-cy='no-bookmarks-div' data-testid='bookmarked-section-info'>
        No bookmarks.
      </StyledBookmarkedInfoDiv>
    );
  };

  return (
    <>
      <h2 data-testid='bookmarked-section-heading'>My Bookmarks</h2>
      {renderRepoCarousel()}
    </>
  );
};

BookmarkedSection.propTypes = propTypes;

export default BookmarkedSection;