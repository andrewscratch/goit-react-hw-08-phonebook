import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
};
const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, onPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, onRejected)
      .addCase(addContact.pending, onPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, onRejected)
      .addCase(deleteContact.pending, onPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, onRejected);
  },
  reducers: {
    setContactsValue(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setContactsValue } = contactSlice.actions;