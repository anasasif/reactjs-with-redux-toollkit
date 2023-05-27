import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import './index.scss';
import { signInUser } from "../../reducers/authReducer";
import { useLoginUserMutation, useRegisterUserMutation } from '../../services/users';
import { useDispatch, useSelector } from "react-redux";
import LoginFrom from '../../components/LoginFrom';
import RegisterFrom from '../../components/RegisterForm';

function LoginPage() {
  const { userId, userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const [getRegisterForm, setRegisterForm] = useState(false)
  const [getLoginForm, setLoginForm] = useState(true)
  const [getSuccess, setSuccess] = useState('')
  const [geError, seError] = useState('')
  
  const [loginUser, loginresult] = useLoginUserMutation()
  const [registerUser, registerresult] = useRegisterUserMutation()


  useEffect(() => {

    if (loginresult?.isSuccess) {
      dispatch(signInUser({
        userId: loginresult?.data?.user?.id,
        userToken: loginresult?.data?.token,
        userEmail: loginresult?.data?.user?.email,
      }));
      setSuccess(loginresult?.data?.success)
    }

    if (loginresult?.isError) {
      seError(loginresult?.error?.data?.error) 
      setSuccess('')
    }

    if (registerresult?.isSuccess) {
      setSuccess(registerresult?.data?.success)
      seError('') 
      setRegisterForm(false)
      setLoginForm(true)
    }

    if (registerresult?.isError) {
      seError(registerresult?.error?.data?.error) 
    }

  }, [loginresult, registerresult]);


  function loginModal() {
    setLoginForm(true)
    setRegisterForm(false)
    setSuccess('')
    seError('') 
  }

  function regsiterModal() { 
    setRegisterForm(true)
    setLoginForm(false)
    setSuccess('')
    seError('') 
  }


  if (userToken && userId) {
    history.push("/");
  }


  return (
    <div className="Login">
      <div className="container">
        <div className="row page_Row">
          <div className="page_Box">

            <div>
              {geError &&
                <>
                  <h6 className="alert alert-danger textMsgV">
                    {geError}
                  </h6>
                </>
              }
              {getSuccess &&
                <>
                  <h6 className="alert alert-success textMsgV">
                    {getSuccess}
                  </h6>
                </>
              }
            </div>

            {getLoginForm &&
              <LoginFrom loginUser={loginUser} loginresult={loginresult} regsiterModal={regsiterModal} />
            }
            {getRegisterForm &&
              <RegisterFrom registerUser={registerUser} registerresult={registerresult} loginModal={loginModal} />
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
