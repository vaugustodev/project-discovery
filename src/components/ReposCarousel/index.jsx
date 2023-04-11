import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from 'prop-types';

import { useWidth } from '../../hooks/useWidth';
import GitHubLinkSvg from '../GitHubLinkSvg';
import StarSvg from "../StarSvg";
import {
  StyledRepoCard,
  StyledAnchor,
  StyledInfoDiv,
  StyledIconDiv,
  StyledStarButton,
  StyledUserDiv,
  StyledOwnerSpan,
  StyledNameDiv,
  StyledNameSpan,
  StyledDescription,
} from './style';

export const BREAKPOINTS = [670, 950, 1220, 1520, 1800];

export const RepoCard = ({
  repo,
  idx,
  isSmallerDevice,
  handleRepoBookmark,
  bookmarked,
}) => {
  return (
    <StyledRepoCard data-testid='repo-card' key={idx} isSmallerDevice={isSmallerDevice}>
      <StyledAnchor data-testid='anchor-html-url' href={repo.html_url} target="_blank">
        <StyledInfoDiv data-testid='info-div'>
          <StyledIconDiv data-testid='icon-div'>
            <GitHubLinkSvg data-testid='github-link-svg' />
          </StyledIconDiv>
          <StyledNameDiv data-testid='name-div'>
            <StyledNameSpan data-testid='name-span'>{repo.name}</StyledNameSpan>
          </StyledNameDiv>
          <StyledUserDiv data-testid='user-div'>
            User: <StyledOwnerSpan data-testid='owner-span'>{repo.owner}</StyledOwnerSpan>
          </StyledUserDiv>
          <StyledDescription data-testid='description'>{repo.description}</StyledDescription>
        </StyledInfoDiv>
      </StyledAnchor>
      <StyledStarButton
        data-cy='star-button'
        data-testid='star-button'
        onClick={() => handleRepoBookmark(repo)}
      >
          <StarSvg data-testid='star-svg' bookmarked={bookmarked} />
      </StyledStarButton>
    </StyledRepoCard>
  );
};

const propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
  })),
  handleRepoBookmark: PropTypes.func,
  bookedmarkedRepoIds: PropTypes.arrayOf(PropTypes.number),
};

const ReposCarousel = ({ repos, handleRepoBookmark, bookedmarkedRepoIds }) => {
  const windowWidth = useWidth();
  const isSmallerDevice = windowWidth <= BREAKPOINTS[0];

  const responsive = {
    viewSize6: {
      breakpoint: { max: 4000, min: BREAKPOINTS[4] },
      items: 6
    },
    viewSize5: {
      breakpoint: { max: BREAKPOINTS[4], min: BREAKPOINTS[3] },
      items: 5
    },
    viewSize4: {
      breakpoint: { max: BREAKPOINTS[3], min: BREAKPOINTS[2] },
      items: 4
    },
    viewSize3: {
      breakpoint: { max: BREAKPOINTS[2], min: BREAKPOINTS[1] },
      items: 3
    },
    viewSize2: {
      breakpoint: { max: BREAKPOINTS[1], min: BREAKPOINTS[0] },
      items: 2
    },
    viewSize1: {
      breakpoint: { max: BREAKPOINTS[0], min: 0 },
      items: 1
    },
  };

  const getSlidesToSlide = () => {
    if (windowWidth >= BREAKPOINTS[4]) return 6;
    if (windowWidth >= BREAKPOINTS[3]) return 5;
    if (windowWidth >= BREAKPOINTS[2]) return 4;
    if (windowWidth >= BREAKPOINTS[1]) return 3;
    if (windowWidth >= BREAKPOINTS[0]) return 2;
    return 1;
  };

  return (
    <Carousel
      responsive={responsive}
      slidesToSlide={getSlidesToSlide()}
    >
      {repos.map((repo, idx) => {
        return (
          <RepoCard
            key={idx}
            repo={repo}
            idx={idx}
            isSmallerDevice={isSmallerDevice}
            handleRepoBookmark={handleRepoBookmark}
            bookmarked={bookedmarkedRepoIds.includes(repo.id)}
          />
        );
      })}
    </Carousel>
  );
};

ReposCarousel.propTypes = propTypes;

export default ReposCarousel;