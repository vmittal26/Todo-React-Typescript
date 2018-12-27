import ITodo from "../../model/ITodo";
import ITodoAction from "../../model/ITodoAction";
import { TodoAction } from "./TodosContext";
import uuid from "uuid";

const reducer = (state: ITodo[], action: ITodoAction): ITodo[] => {
  switch (action.type) {
    case TodoAction.UPDATE_TODO:
          state.map(element =>
            element.id === action.payload.id ? (element.todo = action.payload.todo) : element
          );
          console.log(state);
        return state;
    case TodoAction.ADD_TODO:
        const newTodo = { id: uuid(), todo :action.payload, status : false}
        return[
          ...state,
          newTodo
        ]
    case TodoAction.TOGGLE_TODO:
      state.map(element =>
        element.id === action.payload.id ? (element.status = !element.status) : element
      );
      return state;
    case TodoAction.REMOVE_TODO:
      return state.filter(element => element.id !== action.payload);
    case TodoAction.SEARCH_TODO:
      let searchText: string = action.payload;
      return state.filter(element => {
        element.todo.includes(searchText);
      });

    default:
      return state;
  }
};

export default reducer;
