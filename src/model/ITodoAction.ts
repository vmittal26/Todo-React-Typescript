import { TodoAction } from './../components/TodosContainer/TodosContext';
export default interface ITodoAction{
    type:TodoAction,
    payload?:any
}