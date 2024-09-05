import { useState } from "react";
import { useForm } from "react-hook-form";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "../../components/ModalWindow/styles.module.css";
import Partners from "../Partners";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const onRegister = async (data) => {
    console.log(data);
    setIsRegistered(true);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <h2>Register</h2>
      <label>
        First Name:
        <input
          type="text"
          id="firstName"
          {...register("firstName", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.firstName?.type === "required" && (
          <p className={styles.hiddenPar}>First name is required</p>
        )}
        {errors.firstName?.type === "minLength" && (
          <p className={styles.hiddenPar}>
            First name must be at least 3 characters
          </p>
        )}
        {errors.firstName?.type === "pattern" && (
          <p className={styles.hiddenPar}>
            First name must contain only letters
          </p>
        )}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          id="lastName"
          {...register("lastName", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName?.type === "required" && (
          <p className={styles.hiddenPar}>Last name is required</p>
        )}
        {errors.lastName?.type === "minLength" && (
          <p className={styles.hiddenPar}>
            Last name must be at least 3 characters
          </p>
        )}
        {errors.lastName?.type === "pattern" && (
          <p className={styles.hiddenPar}>
            Last name must contain only letters
          </p>
        )}
      </label>
      <label>
        Email:
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
        />
        {errors.email?.type === "required" && (
          <p className={styles.hiddenPar}>Email is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className={styles.hiddenPar}>Invalid email format</p>
        )}
      </label>
      <label>
        Password:
        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 5,
          })}
        />
        {errors.password?.type === "required" && (
          <p className={styles.hiddenPar}>Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className={styles.hiddenPar}>
            Password must be at least 5 characters
          </p>
        )}
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === getValues("password"),
          })}
        />
        {errors.confirmPassword?.type === "required" && (
          <p className={styles.hiddenPar}>Confirm password is required</p>
        )}
        {errors.confirmPassword?.type === "validate" && (
          <p className={styles.hiddenPar}>Passwords do not match</p>
        )}
      </label>
      <button type="submit">Register</button>
      {isRegistered && <p>Registration successful!</p>}
    </form>
  );
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLogedIn, setIsLogedIn] = useState(false);

  const onLogedIn = async (data) => {
    console.log(data);
    setIsLogedIn(true);
  };

  return (
    <form onSubmit={handleSubmit(onLogedIn)}>
      <h2>Log In</h2>
      <label>
        Email:
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
        />
        {errors.email?.type === "required" && (
          <p className={styles.hiddenPar}>Email is required</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className={styles.hiddenPar}>Invalid email format</p>
        )}
      </label>
      <label>
        Password:
        <input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 5,
          })}
        />
        {errors.password?.type === "required" && (
          <p className={styles.hiddenPar}>Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className={styles.hiddenPar}>
            Password must be at least 5 characters
          </p>
        )}
      </label>
      <button type="submit">Login</button>
      {isLogedIn && <p>Login successful!</p>}
    </form>
  );
};

function ModalWindow() {
  const navigate = useNavigate();

  return (
    <div className={styles.modalBackgroundContainer}>
      <Partners />
      <div className={styles.modalContainer}>
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  );
}

export default ModalWindow;
