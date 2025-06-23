import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const intialValues = {
  users: [],
  loading: true,
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await axios.get("http://localhost:9000/api/v1/users")
  return response.data;
})

const userSlice = createSlice({
  name: "userslice",
  initialState: intialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.loading = false
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false
      })
  },
})

export default userSlice.reducer
