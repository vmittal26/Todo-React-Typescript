import React from "react";
import ITodosContext from "../../model/ITodosContext";

const initialTodos = [
  { id: 1, todo: "Eat Breakfast", status: false },
  { id: 2, todo: "Do Laundry", status: false },
  { id: 3, todo: "Finish Project", status: false },
  { id: 4, todo: "Have Lunch", status: false },
  { id: 5, todo: "Continue Project", status: true }

];

const TodosContext = React.createContext<ITodosContext>({
  todos:initialTodos,
  dispatch:null
});

export enum TodoAction { TOGGLE_TODO, REMOVE_TODO ,SEARCH_TODO, ADD_TODO , UPDATE_TODO}

export default TodosContext;
