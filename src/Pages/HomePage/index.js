import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
import './index.scss';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { logoutUser } from "../../reducers/authReducer";

function HomePage(props) {
  const { userId, userToken, userEmail } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  if (!userToken && !userId) {
    history.push("/");
  }

  function userLogout() {
    dispatch(logoutUser());
    history.push("/");
  }

  return (
    <div className="Login">
      <div className="container">
        <div className="row page_Row">
          <div className="page_Box">
            <div className="register_Header">
              <h4>Home Page</h4>
            </div>
            <div>
              <span>Welcome:</span> <span>{userEmail}</span>
            </div>
            <div className="form-group">
              <Button
                onClick={userLogout}
                className="w100"
                color="warning"
                variant="contained"
                size="large"
              >Logout</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
