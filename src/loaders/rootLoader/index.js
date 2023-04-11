import { redirect } from "react-router-dom";

import { discoveryRoute } from "../../routes/Discovery";
import { signInRoute } from "../../routes/SignIn";
import { getCurrentUser } from "../../storage";

const rootLoader = () => {
  const user = getCurrentUser();
  if (user) {
    return redirect(discoveryRoute);
  }
  return redirect(signInRoute);
};

export default rootLoader;