import { createContext } from "react";

export const UserContext = createContext({
  setLoggedIn: () => {},
  setLoading: () => {},
});
