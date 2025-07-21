import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const postAdapter = createEntityAdapter();

const postSlice = createSlice({
  name: 'post',
  initialState: postAdapter.getInitialState(),
  reducers: {
    setAllPosts: postAdapter.setAll,
    addPost: postAdapter.addOne,
  },
});

export const { setAllPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
