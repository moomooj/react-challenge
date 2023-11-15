import { useMemo, useState } from "react";
import Parent from "./Parent";
import { UserContext } from "./UserContext";

const GrandParent = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const value = useMemo(
    () => ({ setLoggedIn, setLoading }),
    [setLoggedIn, setLoading]
  );

  return (
    <UserContext.Provider value={value}>
      <Parent />
      <div>{loggedIn ? "로그인" : "로그인안해"}</div>
      <div>{loading ? "로딩중" : "로딩안해"}</div>
    </UserContext.Provider>
  );
};
export default GrandParent;
