import { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ReposCarousel, { BREAKPOINTS } from '../ReposCarousel';
import { useReposActions, useFetchReposState } from '../../hooks/useFetchReposState';
import { sortLabelToQuery } from '../../routes/Discovery';
import { useWidth } from '../../hooks/useWidth';
import {
  StyledSelect,
  StyledSelectDiv,
  StyledReposStatus,
} from './style';

const buildQuery = (topic, sortOption) => {
  return `https://api.github.com/search/repositories?q=language%3A${topic}%20stars%3A%3E1000%20license%3Amit&per_page=40&page=1&sort=${sortOption}`;
};

const propTypes = {
  topic: PropTypes.string.isRequired,
  sortOption: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  handleRepoBookmark: PropTypes.func.isRequired,
  bookedmarkedRepoIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const TopicSection = ({
  topic,
  sortOption,
  onSortChange,
  handleRepoBookmark,
  bookedmarkedRepoIds,
}) => {
  const [state, dispatch] = useFetchReposState();

  // Query GitHub API every time sortOption changes.
  useEffect(() => {
    const query = buildQuery(topic, sortOption);
    dispatch({ type: useReposActions.FETCH_START })
    axios.get(query)
      .then((response) => {
        dispatch({
          type: useReposActions.FETCH_SUCCESS,
          // Pass to reducer only the data that's used in the UI.
          repos: response.data.items.map(r => {
            return {
              id: r.id,
              html_url: r.html_url,
              name: r.name,
              description: r.description,
              owner: r.owner.login,
            };
          }),
        });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: useReposActions.FETCH_ERROR })
      });
  }, [sortOption, topic, dispatch]);

  const renderRepos = () => {
    if (state.loading) {
      return <StyledReposStatus data-testid='topic-section-loading-status'>Loading...</StyledReposStatus>;
    }

    if (state.error) {
      return <StyledReposStatus data-testid='topic-section-error-status'>An unexpected error occurred.</StyledReposStatus>;
    }
    return <ReposCarousel
      repos={state.repos}
      handleRepoBookmark={handleRepoBookmark}
      bookedmarkedRepoIds={bookedmarkedRepoIds}
    />;
  };

  const windowWidth = useWidth();
  const alignVertically = windowWidth <= BREAKPOINTS[0];

  return (
    <div data-cy={`topic-section-${topic}`} data-testid='topic-section'>
      <StyledSelectDiv data-testid='topic-section-select-div' alignVertically={alignVertically}>
        <h2 data-testid='topic-section-heading'>{topic}</h2>
        <StyledSelect data-cy='topic-section-select' data-testid='topic-section-select' alignVertically={alignVertically} defaultValue={sortOption} onChange={(e) => onSortChange(e, topic)}>
          {Object.keys(sortLabelToQuery).map((option) => <option data-testid={`topic-section-option-${option}`} key={option} value={sortLabelToQuery[option]}>{`Sort by ${option}`}</option>)}
        </StyledSelect>
      </StyledSelectDiv>
      {renderRepos()}
    </div>
  );
};

TopicSection.propTypes = propTypes;

export default TopicSection;