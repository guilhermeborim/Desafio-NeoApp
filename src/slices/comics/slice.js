import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchComics } from "../../services/api";

export const loadComics = createAsyncThunk("comics/loadComics", async () => {
  const comics = await fetchComics();

  const totalRare = Math.ceil(comics.length * 0.1);
  const indicesRare = new Set();
  while (indicesRare.size < totalRare) {
    indicesRare.add(Math.floor(Math.random() * comics.length));
  }

  const comicsMarked = comics.map((comic, index) => ({
    ...comic,
    isRare: indicesRare.has(index),
  }));

  return comicsMarked;
});

const comicsSlice = createSlice({
  name: "comics",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadComics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadComics.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadComics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default comicsSlice.reducer;
