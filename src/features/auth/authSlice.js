import { createSlice, createAction } from "@reduxjs/toolkit";
import { validateLogin, getUserProfile } from "../../apiservice";

// Asynchronous action for user login.
export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      // Attempt to login by calling the login validation API.
      const response = await validateLogin(loginData);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      // If a token is received, login is successful.
      if (data.body?.token) {
        dispatch(loginUserSuccess(data.body.token));
      } else {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const logout = createAction("auth/logout");

// Asynchronous action to retrieve the user's profile
export const fetchUserProfile = (token) => {
  return async (dispatch) => {
    try {
      const response = await getUserProfile(token);

      const data = await response.json();

      if (data.body) {
        dispatch(updateUserName(data.body.userName));
        dispatch(updateFirstName(data.body.firstName));
        dispatch(updateLastName(data.body.lastName));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
};

// Synchronous action created to handle parts of the state.
export const updateUserName = createAction("auth/updateUserName");
export const updateFirstName = createAction('auth/updateFirstName');
export const updateLastName = createAction('auth/updateLastName');

// Selectors to access different parts of the state.
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    status: "idle",
    userName: null,
    firstName: null,
    lastName: null,
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.token = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.firstName = null;
      state.lastName = null;
      state.status = "idle";
      state.error = null;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

// Selectors to access different parts of the state.
export const selectToken = (state) => state.auth.token;
export const selectStatus = (state) => state.auth.status;
export const selectUserName = (state) => state.auth.userName;
export const selectFirstName = (state) => state.auth.firstName;
export const selectLastName = (state) => state.auth.lastName;
export const selectError = (state) => state.auth.error;

export const { loginUserSuccess } = authSlice.actions;

export default authSlice.reducer;
