import { useMemo, useState } from "react";

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  const visibleTodos = useMemo(() => {
    // ✅ Does not re-run unless todos or filter change
    // ✅ todos나 filter가 변하지 않는 한 재실행되지 않음
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
  // ...
}
