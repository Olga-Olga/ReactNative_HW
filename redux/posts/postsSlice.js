import { createSlice } from "@reduxjs/toolkit";
import { addComentThunk, addPostThunk, getPostsThunk } from "./postsOperations";

const initialState = {
  posts: [],
  isLoading: false,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.isLoading = false;
      })
      .addCase(getPostsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addPostThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addPostThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addPostThunk.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(
        addComentThunk.fulfilled,
        (state, { payload: { postId, newComent } }) => {
          const newPosts = state.posts.map((post) => {
            if (post.id === postId) {
              post.coments.push(newComent);
              return post;
            }
            return post;
          });
          if (newPosts) {
            state.posts = newPosts;
          }
          state.isLoading = false;
        }
      )
      .addCase(addComentThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addComentThunk.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const postsReducer = postsSlice.reducer;
export const { allPosts } = postsSlice.actions;
