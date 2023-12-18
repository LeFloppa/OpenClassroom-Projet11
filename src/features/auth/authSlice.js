import { createSlice, createAction } from "@reduxjs/toolkit";
import { validateLogin, getUserProfile } from "../../apiservice";

export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await validateLogin(loginData);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      if (data.body?.token) {
        dispatch(loginUserSuccess(data.body.token));
      } else {
        throw new Error("Invalid email or password");
      }

      return data;
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  };
};

export const logout = createAction("auth/logout");

export const fetchUserProfile = (token) => {
  return async (dispatch) => {
    try {
      const response = await getUserProfile(token);

      const data = await response.json();

      console.log(data.body.userName);

      if (data.body) {
        dispatch(updateUserName(data.body.userName));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
};

export const updateUserName = createAction("auth/updateUserName");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    status: "idle",
    userName: null,
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.token = action.payload;
      state.status = "succeeded";
      state.userName = null;
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.status = "idle";
      state.error = null;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const selectToken = (state) => state.auth.token;
export const selectStatus = (state) => state.auth.status;
export const selectUserName = (state) => state.auth.userName;
export const selectError = (state) => state.auth.error;

export const { loginUserSuccess } = authSlice.actions;

export default authSlice.reducer;
