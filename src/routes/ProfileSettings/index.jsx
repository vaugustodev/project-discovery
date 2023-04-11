import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { discoveryRoute } from "../Discovery";
import { getUser, setCurrentUser, getEmail, replaceUser } from "../../storage";
import {
  StyledProfileSettings,
  StyledErrorMsg,
} from "./style";

export const profileSettingsRoute = `profile-settings`;

const ProfileSettings = () => {
  const { currentUser } = useLoaderData();
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const checkNoUserChanges = (inputUsername, inputEmail) => {
    const userEmail = currentUser.email || '';
    return inputUsername === currentUser.username && inputEmail === userEmail;
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

  const updateUserAndRedirect = (updatedUser) => {
    replaceUser(currentUser, updatedUser);
    setCurrentUser(updatedUser);
    navigate(-1);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const inputUsername = e.target.elements.username.value;
    const inputEmail = e.target.elements.email.value;
    
    if (checkNoUserChanges(inputUsername, inputEmail)) {
      navigate(discoveryRoute);
      return
    };

    if (!inputUsername) {
      setErrorMsg("Username is required.");
      return false;
    }
    if (inputUsername !== currentUser.username && checkIfUserExists(inputUsername)) {
      return;
    }

    const updatedUser = {
      ...currentUser,
      username: inputUsername,
    }

    if (inputEmail !== currentUser.email) {
      if (checkIfEmailExists(inputEmail)) {
        return;
      }
      updatedUser.email = inputEmail;
    }

    updateUserAndRedirect(updatedUser);
  };

  return (
    <StyledProfileSettings data-testid='profile-settings'>
      <form data-testid='profile-settings-form' method="post" onSubmit={handleSave}>
        <FormInput
          label="Username *"
          name="username"
          type="text"
          defaultValue={currentUser.username}
        />
        <hr/>
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          defaultValue={currentUser.email}
        />
        <hr/>
        <FormButton text='Save' />
      </form>
      <StyledErrorMsg data-cy='profile-settings-error-msg' data-testid='profile-settings-error-msg'>{errorMsg}</StyledErrorMsg>
    </StyledProfileSettings>
  );
};

export default ProfileSettings;