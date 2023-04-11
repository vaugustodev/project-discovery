import bcrypt from "bcryptjs";

import { setCurrentUser, getUser, setUser } from "../../storage";

const logOutFromCurrentUser = () => {
  setCurrentUser('');
};

const checkAndCreateDemoUser = () => {
  if (getUser("username")) return;
  var hash = bcrypt.hashSync("pass", 10);
  setUser({ username: "username", password: hash, email: "user@name.com" });
};

const signInLoader = () => {
  logOutFromCurrentUser();
  checkAndCreateDemoUser();
  return null;
};

export default signInLoader;