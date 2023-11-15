import { createContext } from "react";
import { Action } from "./FirstReducec";

export const LoggedInContext = createContext({
  loggedIn: false,
});

export const LoggedInDispatchContext = createContext<React.Dispatch<Action>>(
  () => {}
);
