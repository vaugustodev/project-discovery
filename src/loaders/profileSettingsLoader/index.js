import { redirect } from "react-router-dom";

import { signInRoute } from "../../routes/SignIn";
import { getCurrentUser } from "../../storage";

const profileSettingsLoader = () => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return redirect(signInRoute);
  }

  return { currentUser };
};

export default profileSettingsLoader;