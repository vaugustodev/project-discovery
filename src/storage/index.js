import { buildUserKey, buildUserOptionsKey } from '../utils';

export const setCurrentUser = (user) => {
  try {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem('currentUser'));
  } catch (error) {
    console.error(error);
  }
};

export const setUser = (user) => {
  try {
    localStorage.setItem(buildUserKey(user.username), JSON.stringify(user));
  } catch (error) {
    console.error(error);
  }

  // Persisting the email to mock account creation, to
  // prevent multiple accounts with the same email.
  if (user.email) {
    try {
      localStorage.setItem(user.email, 'stored');
    } catch (error) {
      console.error(error);
    }
  }
};

export const getUser = (username) => {
  try {
    return JSON.parse(localStorage.getItem(buildUserKey(username)));
  } catch (error) {
    console.error(error);
  }
};

export const getEmail = (email) => {
  try {
    return localStorage.getItem(email);
  } catch (error) {
    console.error(error);
  }
};

export const replaceUser = (oldUser, newUser) => {
  const userOptions = getUserOptions(oldUser.username);

  try {
    localStorage.removeItem(buildUserKey(oldUser.username));
  } catch (error) {
    console.error(error);
  }
  try {
    localStorage.removeItem(buildUserOptionsKey(oldUser.username));
  } catch (error) {
    console.error(error);
  }
  if (oldUser.email) {
    try {
      localStorage.removeItem(oldUser.email);
    } catch (error) {
      console.error(error);
    }
  }
  setUser(newUser);
  setUserOptions(userOptions, newUser.username);
};

export const setUserOptions = (userOptions, username) => {
  try {
    localStorage.setItem(buildUserOptionsKey(username), JSON.stringify(userOptions));
  } catch (error) {
    console.error(error);
  }
};

export const getUserOptions = (username) => {
  try {
    return JSON.parse(localStorage.getItem(buildUserOptionsKey(username)));
  } catch (error) {
    console.error(error);
  }
};