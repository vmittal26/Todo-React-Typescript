import React, { useState, FormEvent, useContext } from "react";
import TodosContext, { TodoAction } from "../TodosContainer/TodosContext";

export default function SearchTodo() {
  const [searchText, setSearchText] = useState("");
  const { dispatch } = useContext(TodosContext);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (dispatch) dispatch({ type: TodoAction.ADD_TODO, payload: searchText });
    setSearchText("");
  };
  return (
    <form onSubmit={handleSubmit} className={"py-4 text-center"}>
      <input
        type="text"
        className={"w-25 border border-success"}
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
    </form>
  );
}
