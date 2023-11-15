import { useReducer } from "react";
import { checkLoginReducer } from "./FirstReducec";
import Parent from "./Parent";
import { LoggedInContext, LoggedInDispatchContext } from "./UserContext";

const GrandParent = () => {
  const initial = { loggedIn: false };
  const [loggedIn, dispatch] = useReducer(checkLoginReducer, initial);

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <LoggedInDispatchContext.Provider value={dispatch}>
        <Parent />
      </LoggedInDispatchContext.Provider>
    </LoggedInContext.Provider>
  );
};
export default GrandParent;
