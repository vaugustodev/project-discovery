import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { discoveryRoute } from "../Discovery";
import { getUser, setUser, setCurrentUser, getEmail } from "../../storage";
import { StyledSignUp, StyledErrorMsg } from "./style";

export const signUpRoute = '/sign-up';

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const validateRequiredFields = (inputUsername, inputPassword, inputConfirmPassword) => {
    if (!inputUsername && !inputPassword && !inputConfirmPassword) {
      setErrorMsg("Username, password, and confirm password are required.");
      return false;
    }
    if (!inputUsername && !inputPassword) {
      setErrorMsg("Username and password are required.");
      return false;
    }
    if (!inputUsername && !inputConfirmPassword) {
      setErrorMsg("Username and confirm password are required.");
      return false;
    }
    if (!inputPassword && !inputConfirmPassword) {
      setErrorMsg("Password and confirm password are required.");
      return false;
    }
    if (!inputUsername) {
      setErrorMsg("Username is required.");
      return false;
    }
    if (!inputPassword) {
      setErrorMsg("Password is required.");
      return false;
    }
    if (!inputConfirmPassword) {
      setErrorMsg("Confirm password is required.");
      return false;
    }
    return true;
  };

  const validatePasswordConfirmation = (inputPassword, inputConfirmPassword) => {
    if (inputPassword !== inputConfirmPassword) {
      setErrorMsg("Passwords do not match.");
      return false;
    }
    return true;
  };

  const checkIfUserExists = (inputUsername) => {
    const user = getUser(inputUsername);
    if (user) {
      setErrorMsg("Username already in use.");
      return true;
    }
    return false;
  };

  const checkIfEmailExists = (inputEmail) => {
    const email = getEmail(inputEmail);
    if (email) {
      setErrorMsg("E-mail already in use.");
      return true;
    }
    return false;
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const inputUsername = e.target.elements.username.value;
    const inputPassword = e.target.elements.password.value;
    const inputConfirmPassword = e.target.elements.confirmPassword.value;

    if (!validateRequiredFields(inputUsername, inputPassword, inputConfirmPassword)) {
      return;
    }
    if (!validatePasswordConfirmation(inputPassword, inputConfirmPassword)) {
      return;
    }
    if (checkIfUserExists(inputUsername)) {
      return;
    }

    const newUser = {
      username: inputUsername,
      password: bcrypt.hashSync(inputPassword, 10),
    }

    const inputEmail = e.target.elements.email.value;
    if (inputEmail) {
      if (checkIfEmailExists(inputEmail)) {
        return;
      }
      newUser.email = inputEmail;
    }

    setUser(newUser);
    const user = getUser(inputUsername);
    if (!user) {
      setErrorMsg("Error fetching the new user. Cant't redirect.");
      return;
    }

    setCurrentUser(user);

    navigate(discoveryRoute);
  };

  return (
    <StyledSignUp data-testid='sign-up'>
      <form data-testid='sign-up-form' method="post" onSubmit={handleSignUp}>
        <FormInput label="Username *" name="username" type="text" />
        <hr/>
        <FormInput label="E-mail" name="email" type="email" />
        <hr/>
        <FormInput label="Password *" name="password" type="password" />
        <hr/>
        <FormInput label="Confirm Password *" name="confirmPassword" type="password" />
        <hr/>
        <FormButton text='Sign Up' />
      </form>
      <StyledErrorMsg data-cy='sign-up-error-message' data-testid='sign-up-error-message'>{errorMsg}</StyledErrorMsg>
    </StyledSignUp>
  );
};

export default SignUp;