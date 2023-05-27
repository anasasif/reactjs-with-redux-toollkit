import React, { Component, useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import './index.scss';
import { useSelector } from "react-redux";
function Private(props) {
  const { userToken } = useSelector((state) => state.auth);

  const Cmp = props.cmp;

  return (
    <div className="main-body">
      <div className={`section`}>
        {userToken ?
          <Cmp /> :
          <Redirect to="login"></Redirect>
        }
      </div>
    </div>
  );
}

export default Private;
