/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty {
    onCreateParty {
      id
      pin
      name
      songs {
        items {
          id
          title
          artist
          album
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
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty {
    onUpdateParty {
      id
      pin
      name
      songs {
        items {
          id
          title
          artist
          album
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
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty {
    onDeleteParty {
      id
      pin
      name
      songs {
        items {
          id
          title
          artist
          album
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
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      title
      artist
      album
      partyID
      party {
        id
        pin
        name
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
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      title
      artist
      album
      partyID
      party {
        id
        pin
        name
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
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      title
      artist
      album
      partyID
      party {
        id
        pin
        name
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
export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee {
    onCreateAttendee {
      id
      screenName
      partyID
      party {
        id
        pin
        name
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
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee {
    onUpdateAttendee {
      id
      screenName
      partyID
      party {
        id
        pin
        name
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
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee {
    onDeleteAttendee {
      id
      screenName
      partyID
      party {
        id
        pin
        name
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
