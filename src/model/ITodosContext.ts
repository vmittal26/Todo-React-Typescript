import  ITodo from './ITodo';
import { Dispatch } from 'react';
import ITodoAction from './ITodoAction';

export default interface ITodosContext{
    todos:Array<ITodo>
    dispatch:Dispatch<ITodoAction> | null,
    props?:any
}