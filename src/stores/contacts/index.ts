import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  id: number;
  name: string;
  phone: string;
}[] = [
  { id: 1, name: "Tim Cook", phone: "1234567890" },
  { id: 2, name: "Craig Federighi", phone: "1234567890" },
  { id: 3, name: "Jony Ive", phone: "1234567890" },
  { id: 4, name: "Angela Ahrendts", phone: "1234567890" },
  { id: 5, name: "Phil Schiller", phone: "1234567890" },
  { id: 6, name: "Eddy Cue", phone: "1234567890" },
  { id: 7, name: "Jimmy Iovine", phone: "1234567890" },
  { id: 8, name: "Steve Jobs", phone: "1234567890" },
  { id: 9, name: "Steve Wozniak", phone: "1234567890" },
  { id: 10, name: "Jonathan Morrison", phone: "1234567890" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
