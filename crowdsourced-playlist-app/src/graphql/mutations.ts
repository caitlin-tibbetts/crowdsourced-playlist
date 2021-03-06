/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createParty = /* GraphQL */ `
  mutation CreateParty(
    $input: CreatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    createParty(input: $input, condition: $condition) {
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
export const updateParty = /* GraphQL */ `
  mutation UpdateParty(
    $input: UpdatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    updateParty(input: $input, condition: $condition) {
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
export const deleteParty = /* GraphQL */ `
  mutation DeleteParty(
    $input: DeletePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    deleteParty(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
export const createAttendee = /* GraphQL */ `
  mutation CreateAttendee(
    $input: CreateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    createAttendee(input: $input, condition: $condition) {
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
export const updateAttendee = /* GraphQL */ `
  mutation UpdateAttendee(
    $input: UpdateAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    updateAttendee(input: $input, condition: $condition) {
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
export const deleteAttendee = /* GraphQL */ `
  mutation DeleteAttendee(
    $input: DeleteAttendeeInput!
    $condition: ModelAttendeeConditionInput
  ) {
    deleteAttendee(input: $input, condition: $condition) {
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
