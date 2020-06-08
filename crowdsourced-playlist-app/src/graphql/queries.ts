/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
      id
      pin
      name
      nowPlaying {
        id
        uri
        title
        artist
        album
        upvotes
        downvotes
        partyID
        party {
          id
          pin
          name
        }
      }
      songs {
        items {
          id
          uri
          title
          artist
          album
          upvotes
          downvotes
          partyID
        }
        nextToken
      }
      attendees {
        items {
          id
          screenName
          partyID
        }
        nextToken
      }
    }
  }
`;
export const listPartys = /* GraphQL */ `
  query ListPartys(
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pin
        name
        nowPlaying {
          id
          uri
          title
          artist
          album
          upvotes
          downvotes
          partyID
        }
        songs {
          nextToken
        }
        attendees {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      uri
      title
      artist
      album
      upvotes
      downvotes
      partyID
      party {
        id
        pin
        name
        nowPlaying {
          id
          uri
          title
          artist
          album
          upvotes
          downvotes
          partyID
        }
        songs {
          nextToken
        }
        attendees {
          nextToken
        }
      }
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        uri
        title
        artist
        album
        upvotes
        downvotes
        partyID
        party {
          id
          pin
          name
        }
      }
      nextToken
    }
  }
`;
export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
      id
      screenName
      partyID
      party {
        id
        pin
        name
        nowPlaying {
          id
          uri
          title
          artist
          album
          upvotes
          downvotes
          partyID
        }
        songs {
          nextToken
        }
        attendees {
          nextToken
        }
      }
    }
  }
`;
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        screenName
        partyID
        party {
          id
          pin
          name
        }
      }
      nextToken
    }
  }
`;
export const partiesByPin = /* GraphQL */ `
  query PartiesByPin(
    $pin: Int
    $sortDirection: ModelSortDirection
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    partiesByPin(
      pin: $pin
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pin
        name
        nowPlaying {
          id
          uri
          title
          artist
          album
          upvotes
          downvotes
          partyID
        }
        songs {
          nextToken
        }
        attendees {
          nextToken
        }
      }
      nextToken
    }
  }
`;
