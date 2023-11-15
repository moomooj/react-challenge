type Tasks = { loggedIn: boolean };
export type Action =
  | { type: "check" }
  | { type: "success" }
  | { type: "error" };

export function checkLoginReducer(tasks: Tasks, action: Action) {
  switch (action.type) {
    case "check": {
      return { ...tasks, loggedIn: false };
    }
    case "success": {
      return { ...tasks, loggedIn: true };
    }
    case "error": {
      return { ...tasks, loggedIn: false };
    }
  }
}
