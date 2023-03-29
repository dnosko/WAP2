import { React, useState } from "react";

export function useAuth() {
  const [auth, setAuth] = useState(false);

  const setAuthHelper = newAuth => {
	setAuth(newAuth);
  }

  return {
	authenticated: auth,
	setAuthenticated: setAuthHelper
  };
}
