import { useContext } from "react";
import { LoggedInContext, LoggedInDispatchContext } from "./UserContext";

const Children = () => {
  const task = useContext(LoggedInContext);
  const dispatch = useContext(LoggedInDispatchContext);

  return (
    <>
      <button onClick={() => dispatch({ type: "error" })}>에러 버튼</button>
      <button onClick={() => dispatch({ type: "success" })}>로그인 버튼</button>
      <div>{task.loggedIn ? "로그인" : "로그인 안됨"}</div>
    </>
  );
};
export default Children;
