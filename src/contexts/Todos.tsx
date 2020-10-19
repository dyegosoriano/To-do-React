import React, { createContext, useEffect, useState } from 'react'

export const todosContext = createContext({})

interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

export default function todosProvider({ children }: any) {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

  async function getTodos() {
    setLoading(true)

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      ).then(response => response.json())

      setTodos(response)
      setLoading(false)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)
    }
  }

  function deleteTodo(id: number) {
    const filteredTodos = todos.filter(todo => todo.id !== id)

    setTodos(filteredTodos)
  }

  function saveTodo(todo: Todo) {
    setTodos([todo, ...todos])
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <todosContext.Provider
      value={{
        todos,
        loading,
        saveTodo,
        deleteTodo
      }}
    >
      {children}
    </todosContext.Provider>
  )
}
