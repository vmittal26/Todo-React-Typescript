import React, { useContext, useState } from "react";
import TodosContext , { TodoAction }from "../TodosContainer/TodosContext";
import "./TodoList.css";
import ITodoAction from "../../model/ITodoAction";
import SearchTodo from "../SearchTodo/SearchTodo";
import ITodo from "../../model/ITodo";

export default function TodoList() {
  const { todos ,dispatch } = useContext(TodosContext);
  const [ editStateId , setEditStateId ] = useState("");

  const dispatchAction = (action:ITodoAction):void=>{
    if(dispatch)dispatch({type:action.type,payload:action.payload});
  }
  const listClasses = ["TodoList__container", "TodoList__list_item","list-group-item","list-group-item-action"];
  
  const onUpdateTodo=(id:string)=>{
    setEditStateId(id);
  }

  const onEditTodo=(todoText:string,todo:ITodo):void=>{
      todo.todo = todoText;
      const action ={ type:TodoAction.UPDATE_TODO,payload:{todo}}
      dispatchAction(action);
  }
  return (
    
    <div className="TodoList">
    <SearchTodo/>
      <ul className="list-group">
        {todos.map(todo => (
            <li key ={todo.id} onDoubleClick={()=>dispatchAction({type:TodoAction.TOGGLE_TODO,payload:todo})} style={todo.status?{textDecoration:"line-through"}:{}} className={listClasses.join(" ")}>
              {editStateId===""+todo.id?<input style={{flexGrow:1}} value={todo.todo} onChange={(event)=>onEditTodo(event.target.value,todo)}></input>:<span>{todo.todo}</span>}
              <button id={""+todo.id } onClick ={()=>onUpdateTodo(""+todo.id)}className="btn"><i className ="text-primary fas fa-pencil-alt"></i></button>
              <button id={""+todo.id } onClick = {()=>dispatchAction({type:TodoAction.REMOVE_TODO,payload:todo.id})} className="btn"><i className ="text-danger fas fa-trash"></i></button>
            </li>
        ))}
      </ul>
    </div>
  );
}
