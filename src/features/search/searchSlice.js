import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSearchQuery, setCategoryFilter } = searchSlice.actions;
export default searchSlice.reducer;
