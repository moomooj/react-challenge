import { createContext } from "react";

export type GlobalContent = {
  setLoggedIn: (_value: boolean) => void;
  setLoading: (_value: boolean) => void;
};

export const UserContext = createContext<GlobalContent>({
  setLoggedIn: () => {},
  setLoading: () => {},
});
