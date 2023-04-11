import { redirect } from "react-router-dom";

import { signInRoute } from "../../routes/SignIn";
import { getCurrentUser, getUserOptions } from "../../storage";

const discoveryLoader = () => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return redirect(signInRoute);
  }

  const loadedUsername = currentUser.username;
  const loadedCurrentUserOptions = getUserOptions(loadedUsername);

  return { loadedUsername, loadedCurrentUserOptions };
};

export default discoveryLoader;