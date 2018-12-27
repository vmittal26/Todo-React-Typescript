import React from 'react'
import TodosContainer from './components/TodosContainer/TodosContaner';

export default function App() {
  return (
    <>
    <header className="container"><h1 className="d-4 text-center">Todo App</h1></header>
    <main className="container">
        <TodosContainer/>
    </main>
    </>
  )
}
