import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import BookmarkedSection from "../../components/BookmarkedSection";
import TopicSection from "../../components/TopicSection";
import Toggles from "../../components/Toggles";
import { setUserOptions } from "../../storage";

export const discoveryRoute = `/app/discovery`;

export const sortLabelToQuery = {
  stars: 'stars',
  forks: 'forks',
  "help wanted issues": 'help-wanted',
  updated: 'updated',
};

const Discovery = () => {
  const { loadedUsername, loadedCurrentUserOptions } = useLoaderData();
  const [currentUserOptions, setCurrentUserOptions] = useState(loadedCurrentUserOptions || {});

  useEffect(() => {
    setUserOptions(currentUserOptions, loadedUsername);
  }, [currentUserOptions, loadedUsername]);

  const handleRepoBookmark = (repo) => {
    setCurrentUserOptions(currentUserOptions => {
      if (!currentUserOptions) {
        return {
          bookmarks: [repo],
        };
      }

      if (!currentUserOptions.bookmarks) {
        return {
          ...currentUserOptions,
          bookmarks: [repo],
        };
      }

      if (currentUserOptions.bookmarks.some(r => r.id === repo.id)) {
        const copy = { ...currentUserOptions };
        copy.bookmarks = copy.bookmarks.filter(r => r.id !== repo.id);
        return copy;
      }

      const copy = { ...currentUserOptions };
      copy.bookmarks.push(repo);
      return copy;
    });
  };

  const handleToggleClick = (topic) => {
    setCurrentUserOptions(currentUserOptions => {
      if (!currentUserOptions) {
        return {
          topics: {[topic]: sortLabelToQuery.stars},
        };
      }

      if (!currentUserOptions.topics) {
        return {
          ...currentUserOptions,
          topics: {[topic]: sortLabelToQuery.stars},
        };
      }

      if (!currentUserOptions.topics.hasOwnProperty(topic)) {
        return {
          ...currentUserOptions,
          topics: {
            ...currentUserOptions.topics,
            [topic]: sortLabelToQuery.stars,
          },
        };
      }

      const copy = { ...currentUserOptions };
      delete copy.topics[topic];
      return copy;
    });
  };

  const onSortChange = (e, topic) => {
    setCurrentUserOptions(currentUserOptions => {
      return {
        ...currentUserOptions,
        topics: {
          ...currentUserOptions.topics,
          [topic]: e.target.value,
        },
      };
    });
  };

  const getBookmarkedRepoIds = () => {
    if (!currentUserOptions || !currentUserOptions.bookmarks) {
      return [];
    }
    return currentUserOptions.bookmarks.map(r => r.id);
  };

  const renderTopicSections = () => {
    if (!currentUserOptions || !currentUserOptions.topics) {
      return null;
    }
    return Object.keys(currentUserOptions.topics).map((topic) => {
      return <TopicSection
        key={topic}
        topic={topic}
        sortOption={currentUserOptions.topics[topic]}
        onSortChange={onSortChange}
        handleRepoBookmark={handleRepoBookmark}
        bookedmarkedRepoIds={getBookmarkedRepoIds()}
      />;
    });
  };

  return (
    <>
      <BookmarkedSection
        currentUserOptions={currentUserOptions}
        handleRepoBookmark={handleRepoBookmark}
      />
      <Toggles
        currentUserOptions={currentUserOptions}
        handleToggleClick={handleToggleClick}
      />
      {renderTopicSections()}
    </>
  );
};

export default Discovery;