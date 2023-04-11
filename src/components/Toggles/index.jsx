import PropTypes from 'prop-types';

import { StyledToggles, StyledToggleButton } from './style';

const toggleTopics = [
  'Vue',
  'TypeScript',
  'JavaScript',
  'Go',
  'CSS',
  'Node',
];

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
  handleToggleClick: PropTypes.func.isRequired,
};

const Toggles = ({ currentUserOptions, handleToggleClick }) => {
  const renderToggles = () => {
    return toggleTopics.map((topic) => {
      return <StyledToggleButton
        data-cy={`toggle-${topic.toLocaleLowerCase()}`}
        data-testid={`toggle-${topic.toLocaleLowerCase()}`}
        key={topic}
        toggleOn={
          currentUserOptions
          && currentUserOptions.topics
          && currentUserOptions.topics.hasOwnProperty(topic)
        }
        onClick={() => handleToggleClick(topic)}
      >{topic}</StyledToggleButton>;
    });
  };

  return (
    <StyledToggles data-testid='toggles'>
      <h3 data-testid='toggles-heading'>Toggle topics to show</h3>
      {renderToggles()}
    </StyledToggles>
  );
};

Toggles.propTypes = propTypes;

export default Toggles;