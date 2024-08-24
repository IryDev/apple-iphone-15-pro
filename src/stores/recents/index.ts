import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  id: number;
  name: string;
  place: string;
  date: string;
  status?: string;
  outGoing?: boolean;
}[] = [
  {
    id: 1,
    name: "Tim Cook",
    place: "Cupertino, CA",
    date: "7/03/24",
    outGoing: true,
  },
  {
    id: 2,
    name: "Craig Federighi",
    place: "Cupertino, CA",
    date: "7/03/24",
    status: "missed",
  },
  { id: 3, name: "Jony Ive", place: "Cupertino, CA", date: "7/03/24" },
  {
    id: 4,
    name: "Angela Ahrendts",
    place: "Cupertino, CA",
    date: "7/03/24",
    outGoing: true,
  },
  { id: 5, name: "Phil Schiller", place: "Cupertino, CA", date: "7/03/24" },
  {
    id: 6,
    name: "Eddy Cue",
    place: "Cupertino, CA",
    date: "7/03/24",
    status: "missed",
  },
  {
    id: 7,
    name: "Jimmy Iovine",
    place: "Cupertino, CA",
    date: "7/03/24",
    status: "missed",
  },
  { id: 9, name: "Steve Wozniak", place: "Cupertino, CA", date: "7/03/24" },
  {
    id: 10,
    name: "Jonathan Morrison",
    place: "Cupertino, CA",
    date: "7/03/24",
  },
];

const sortedRecents = initialState.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const recentsSlice = createSlice({
  name: "recents",
  initialState: sortedRecents,
  reducers: {
    addRecent: (state, action) => {
      state.push(action.payload);
      state.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    },

    removeRecent: (state, action) => {
      return state.filter((recent) => recent.id !== action.payload);
    },

    clearRecents: () => {
      return [];
    },
  },
});

export const { addRecent } = recentsSlice.actions;

export default recentsSlice.reducer;
