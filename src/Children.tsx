import { useContext } from "react";
import { UserContext } from "./UserContext";

const Children = () => {
  const { setLoading, setLoggedIn } = useContext(UserContext);

  return (
    <>
      <button onClick={() => setLoading((prev: boolean) => !prev)}>
        로딩토글
      </button>
      <button onClick={() => setLoggedIn((prev: boolean) => prev)}>
        로딩토글
      </button>
    </>
  );
};
export default Children;
