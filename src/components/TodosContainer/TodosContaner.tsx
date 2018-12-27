import React ,{ useContext, useReducer} from 'react';
import TodosContext from './TodosContext';
import reducer from './TodoReducer';
import TodoList from '../TodoList/TodoList';


export default function TodosContainer() {

  const {todos:initialTodos}= useContext(TodosContext);
  const[todos,dispatch] =useReducer(reducer,initialTodos);
  
  return (
    <TodosContext.Provider value ={{todos,dispatch}}>
       <TodoList/>
    </TodosContext.Provider>
  )
}
