import React, { useState, useEffect, Fragment } from 'react';
import { useForm } from "react-hook-form";
import './index.scss';
import Button from '@mui/material/Button';
function RegisterFrom({ registerUser, registerresult, loginModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (

    <div className="row">
      <div className="register_Header">
        <h4>Register</h4>
      </div>

      <form onSubmit={handleSubmit(registerUser)}>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" type="text" id="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register('name', { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input className="form-control" type="email" id="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register('email', { required: true })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control dlrdflInput"
            id="password"
            aria-invalid={errors.password ? "true" : "false"}
            {...register('password', { required: true, minLength: 8, maxLength: 16 })} />
          {errors.password && errors.password.type === "required" && <span style={{ color: "red", fontSize: "12px" }}>required*</span>}
          {errors.password && errors.password.type === "maxLength" && <span style={{ color: "red", fontSize: "12px" }}>Password should be maximum 16 digits</span>}
          {errors.password && errors.password.type === "minLength" && <span style={{ color: "red", fontSize: "12px" }}>Password should be minimum 8 digits</span>}
        </div>
        <div className="form-group">
        <Button
          className="w100"
          color="info"
          variant="contained"
          size="large"
          type="submit"
            disabled={registerresult.isLoading ? true : false}>{registerresult.isLoading ? 'Loading...' : 'Register'}</Button>
          </div>
      </form>
      <div className="regsiter-button">
        <Button
          color="info"
          variant="outlined"
          size="small"
          onClick={loginModal}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default RegisterFrom;
