import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Title,
  Summary,
  Label,
  PeopleWrapper,
  People,
  Media,
} from './component/_index';
import { MoreItems } from '../components/_index';

import EpisodePreviewCard from './EpisodePreviewCard';

const EpisodePreview = ({
  episode: {
    episodeId,
    director,
    image,
    title,
    openingCrawl,
    releaseDate,
    people,
  },
  hasNextPage,
  loadMoreCharacters,
}) => (
  <>
    <Container>
      <Header>
        <Media>
          <img src={image} alt="" />
        </Media>
        <Title>
          <h1>Star Wars: Episode</h1>
          <h3>{title}</h3>
        </Title>
      </Header>
      <Summary>
        {openingCrawl}
        <Label>
          Director:&nbsp;
          <span>{director}</span>
        </Label>
        <Label>
          Release Date:&nbsp;
          <span>{releaseDate}</span>
        </Label>
      </Summary>
      <PeopleWrapper>
        <People>
          {people.edges.map(({ node: person }) => (
            <EpisodePreviewCard
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
            />
          ))}
        </People>
      </PeopleWrapper>
    </Container>
    {hasNextPage && (
      <MoreItems>
        <button type="submit" onClick={loadMoreCharacters}>
          <b>Load More</b>
        </button>
      </MoreItems>
    )}
  </>
);

EpisodePreview.propTypes = {
  episode: PropTypes.exact({
    episodeId: PropTypes.number,
    image: PropTypes.string,
    director: PropTypes.string,
    title: PropTypes.string,
    openingCrawl: PropTypes.string,
    releaseDate: PropTypes.string,
    people: PropTypes.exact({
      pageInfo: PropTypes.exact({
        hasNextPage: PropTypes.bool.isRequired,
        endCursor: PropTypes.string,
      }).isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.exact({
          node: PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  loadMoreCharacters: PropTypes.func.isRequired,
};

export default EpisodePreview;
