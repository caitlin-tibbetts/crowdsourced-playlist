/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePartyInput = {
  id?: string | null,
  pin: number,
  name: string,
};

export type ModelPartyConditionInput = {
  pin?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPartyConditionInput | null > | null,
  or?: Array< ModelPartyConditionInput | null > | null,
  not?: ModelPartyConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePartyInput = {
  id: string,
  pin?: number | null,
  name?: string | null,
};

export type DeletePartyInput = {
  id?: string | null,
};

export type CreateSongInput = {
  id?: string | null,
  title: string,
  artist: string,
  album: string,
  partyID: string,
};

export type ModelSongConditionInput = {
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  album?: ModelStringInput | null,
  partyID?: ModelIDInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSongInput = {
  id: string,
  title?: string | null,
  artist?: string | null,
  album?: string | null,
  partyID?: string | null,
};

export type DeleteSongInput = {
  id?: string | null,
};

export type CreateAttendeeInput = {
  id?: string | null,
  screenName: string,
  partyID: string,
};

export type ModelAttendeeConditionInput = {
  screenName?: ModelStringInput | null,
  partyID?: ModelIDInput | null,
  and?: Array< ModelAttendeeConditionInput | null > | null,
  or?: Array< ModelAttendeeConditionInput | null > | null,
  not?: ModelAttendeeConditionInput | null,
};

export type UpdateAttendeeInput = {
  id: string,
  screenName?: string | null,
  partyID?: string | null,
};

export type DeleteAttendeeInput = {
  id?: string | null,
};

export type ModelPartyFilterInput = {
  id?: ModelIDInput | null,
  pin?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPartyFilterInput | null > | null,
  or?: Array< ModelPartyFilterInput | null > | null,
  not?: ModelPartyFilterInput | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  artist?: ModelStringInput | null,
  album?: ModelStringInput | null,
  partyID?: ModelIDInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
};

export type ModelAttendeeFilterInput = {
  id?: ModelIDInput | null,
  screenName?: ModelStringInput | null,
  partyID?: ModelIDInput | null,
  and?: Array< ModelAttendeeFilterInput | null > | null,
  or?: Array< ModelAttendeeFilterInput | null > | null,
  not?: ModelAttendeeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreatePartyMutationVariables = {
  input: CreatePartyInput,
  condition?: ModelPartyConditionInput | null,
};

export type CreatePartyMutation = {
  createParty:  {
    __typename: "Party",
    id: string,
    pin: number,
    name: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        artist: string,
        album: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    attendees:  {
      __typename: "ModelAttendeeConnection",
      items:  Array< {
        __typename: "Attendee",
        id: string,
        screenName: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePartyMutationVariables = {
  input: UpdatePartyInput,
  condition?: ModelPartyConditionInput | null,
};

export type UpdatePartyMutation = {
  updateParty:  {
    __typename: "Party",
    id: string,
    pin: number,
    name: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        artist: string,
        album: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    attendees:  {
      __typename: "ModelAttendeeConnection",
      items:  Array< {
        __typename: "Attendee",
        id: string,
        screenName: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePartyMutationVariables = {
  input: DeletePartyInput,
  condition?: ModelPartyConditionInput | null,
};

export type DeletePartyMutation = {
  deleteParty:  {
    __typename: "Party",
    id: string,
    pin: number,
    name: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        artist: string,
        album: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    attendees:  {
      __typename: "ModelAttendeeConnection",
      items:  Array< {
        __typename: "Attendee",
        id: string,
        screenName: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong:  {
    __typename: "Song",
    id: string,
    title: string,
    artist: string,
    album: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong:  {
    __typename: "Song",
    id: string,
    title: string,
    artist: string,
    album: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong:  {
    __typename: "Song",
    id: string,
    title: string,
    artist: string,
    album: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateAttendeeMutationVariables = {
  input: CreateAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type CreateAttendeeMutation = {
  createAttendee:  {
    __typename: "Attendee",
    id: string,
    screenName: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateAttendeeMutationVariables = {
  input: UpdateAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type UpdateAttendeeMutation = {
  updateAttendee:  {
    __typename: "Attendee",
    id: string,
    screenName: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteAttendeeMutationVariables = {
  input: DeleteAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type DeleteAttendeeMutation = {
  deleteAttendee:  {
    __typename: "Attendee",
    id: string,
    screenName: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetPartyQueryVariables = {
  id: string,
};

export type GetPartyQuery = {
  getParty:  {
    __typename: "Party",
    id: string,
    pin: number,
    name: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        artist: string,
        album: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    attendees:  {
      __typename: "ModelAttendeeConnection",
      items:  Array< {
        __typename: "Attendee",
        id: string,
        screenName: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPartysQueryVariables = {
  filter?: ModelPartyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPartysQuery = {
  listPartys:  {
    __typename: "ModelPartyConnection",
    items:  Array< {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong:  {
    __typename: "Song",
    id: string,
    title: string,
    artist: string,
    album: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      artist: string,
      album: string,
      partyID: string,
      party:  {
        __typename: "Party",
        id: string,
        pin: number,
        name: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAttendeeQueryVariables = {
  id: string,
};

export type GetAttendeeQuery = {
  getAttendee:  {
    __typename: "Attendee",
    id: string,
    screenName: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListAttendeesQueryVariables = {
  filter?: ModelAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttendeesQuery = {
  listAttendees:  {
    __typename: "ModelAttendeeConnection",
    items:  Array< {
      __typename: "Attendee",
      id: string,
      screenName: string,
      partyID: string,
      party:  {
        __typename: "Party",
        id: string,
        pin: number,
        name: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type PartiesByPinQueryVariables = {
  pin?: number | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPartyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PartiesByPinQuery = {
  partiesByPin:  {
    __typename: "ModelPartyConnection",
    items:  Array< {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePartySubscription = {
  onCreateParty:  {
    __typename: "Party",
    id: string,
    pin: number,
    name: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        artist: string,
        album: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    attendees:  {
      __typename: "ModelAttendeeConnection",
      items:  Array< {
        __typename: "Attendee",
        id: string,
        screenName: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePartySubscription = {
  onUpdateParty:  {
    __typename: "Party",
    id: string,
    pin: number,
    name: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        artist: string,
        album: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    attendees:  {
      __typename: "ModelAttendeeConnection",
      items:  Array< {
        __typename: "Attendee",
        id: string,
        screenName: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePartySubscription = {
  onDeleteParty:  {
    __typename: "Party",
    id: string,
    pin: number,
    name: string,
    songs:  {
      __typename: "ModelSongConnection",
      items:  Array< {
        __typename: "Song",
        id: string,
        title: string,
        artist: string,
        album: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    attendees:  {
      __typename: "ModelAttendeeConnection",
      items:  Array< {
        __typename: "Attendee",
        id: string,
        screenName: string,
        partyID: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSongSubscription = {
  onCreateSong:  {
    __typename: "Song",
    id: string,
    title: string,
    artist: string,
    album: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong:  {
    __typename: "Song",
    id: string,
    title: string,
    artist: string,
    album: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong:  {
    __typename: "Song",
    id: string,
    title: string,
    artist: string,
    album: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateAttendeeSubscription = {
  onCreateAttendee:  {
    __typename: "Attendee",
    id: string,
    screenName: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateAttendeeSubscription = {
  onUpdateAttendee:  {
    __typename: "Attendee",
    id: string,
    screenName: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteAttendeeSubscription = {
  onDeleteAttendee:  {
    __typename: "Attendee",
    id: string,
    screenName: string,
    partyID: string,
    party:  {
      __typename: "Party",
      id: string,
      pin: number,
      name: string,
      songs:  {
        __typename: "ModelSongConnection",
        nextToken: string | null,
      } | null,
      attendees:  {
        __typename: "ModelAttendeeConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
