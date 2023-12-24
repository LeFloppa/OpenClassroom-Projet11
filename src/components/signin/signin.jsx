import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loginUser,
  loginUserSuccess,
  logout,
  fetchUserProfile,
} from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./signin.css";

function SignIn() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(loginUserSuccess(token));
      dispatch(fetchUserProfile(token))
        .then(response => {
          if (response.ok) {
            response.json().then(data => {
              if (data.body) {
                navigate("/profile");
              } else {
                throw new Error("Invalid token");
              }
            });
          } else {
            throw new Error("Profile fetch failed");
          }
        })
        .catch(() => {
          localStorage.removeItem("userToken");
          dispatch(logout());
        });
    }
  }, [dispatch, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = loginData;

    try {
      const responseData = await dispatch(loginUser({ email, password }));
      console.log(responseData);

      if (responseData.status === 200) {
        if (responseData?.body?.token) {
          localStorage.setItem("userToken", responseData.body.token);
          dispatch(loginUserSuccess(responseData.body.token));
          dispatch(fetchUserProfile(responseData.body.token));
          navigate("/profile");
        } else {
          setError("Invalid email or password");
        }
      } else {
        if (responseData.status === 400) {
          const errorData = await responseData.json();
          setError(errorData.message);
        } else if (responseData.status === 500) {
          const errorData = await responseData.json();
          setError(errorData.message);
        } else {
          setError("HTTP Error: " + responseData.status);
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={loginData.email}
          autoComplete="current-email"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={loginData.password}
          autoComplete="current-password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default SignIn;
