import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { discoveryRoute } from "../Discovery";
import { signUpRoute } from "../SignUp";
import { getUser, setCurrentUser } from "../../storage";
import {
  StyledSignIn,
  StyledErrorMsg,
  StyledSignUpAnchorDiv,
  StyledSignUpAnchor,
} from "./style";

export const signInRoute = '/sign-in';

const SignIn = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const validateRequiredFields = (inputUsername, inputPassword) => {
    if (!inputUsername && !inputPassword) {
      setErrorMsg("Username and password are required.");
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
    return true;
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const inputUsername = e.target.elements.username.value;
    const inputPassword = e.target.elements.password.value;

    if (!validateRequiredFields(inputUsername, inputPassword)) {
      return;
    }

    const user = getUser(inputUsername);
    if (!user) {
      setErrorMsg("User does not exist.");
      return;
    }

    if (!bcrypt.compareSync(inputPassword, user.password)) {
      setErrorMsg("Incorrect password.");
      return;
    }

    setCurrentUser(user);

    navigate(discoveryRoute);
  };

  return (
    <StyledSignIn data-testid='sign-in'>
      <form data-testid='sign-in-form' method="post" onSubmit={handleSignIn}>
        <FormInput label="Username" name="username" type="text" />
        <hr/>
        <FormInput label="Password" name="password" type="password" />
        <hr/>
        <FormButton text='Sign In' />
      </form>
      <StyledErrorMsg data-cy='sign-in-error-message' data-testid='sign-in-error-message'>{errorMsg}</StyledErrorMsg>
      <StyledSignUpAnchorDiv data-testid='sign-up-anchor-div'>
        <p data-testid='sign-up-paragraph'>Don't have an account?</p>
        <StyledSignUpAnchor data-testid='sign-up-anchor' href={signUpRoute}>Click here to sign up.</StyledSignUpAnchor>
      </StyledSignUpAnchorDiv>
    </StyledSignIn>
  );
};

export default SignIn;