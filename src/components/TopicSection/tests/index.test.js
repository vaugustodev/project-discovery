import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom';

import { sortLabelToQuery } from '../../../routes/Discovery'
import TopicSection from '../'

describe('TopicSection', () => {
  it('renders properly', () => {
    render(
      <TopicSection
        topic='Vue'
        sortOption='stars'
        onSortChange={jest.fn()}
        handleRepoBookmark={jest.fn()}
        bookedmarkedRepoIds={[]}
      />
    );
  
    const topicSection = screen.getByTestId('topic-section');
    expect(topicSection).toBeInTheDocument();

    const topicSectionSelectDiv = screen.getByTestId('topic-section-select-div');
    expect(topicSectionSelectDiv).toBeInTheDocument();

    const topicSectionHeading = screen.getByTestId('topic-section-heading');
    expect(topicSectionHeading).toBeInTheDocument();

    const topicSectionSelect = screen.getByTestId('topic-section-select');
    expect(topicSectionSelect).toBeInTheDocument();

    Object.keys(sortLabelToQuery).map((option) => {
      const optionElement = screen.getByTestId(`topic-section-option-${option}`);
      expect(optionElement).toBeInTheDocument();
    });
  });
});