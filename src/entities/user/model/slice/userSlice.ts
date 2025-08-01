import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const userAdapter = createEntityAdapter();

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState(),
  reducers: {
    setAllUsers: userAdapter.setAll,
    addUser: userAdapter.addOne,
  },
});

export default userSlice.reducer;
