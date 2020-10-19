import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'

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

    Alert.alert('Alerta!', 'Você deseja realmente excluir esse item?', [
      {
        text: 'Sim',
        onPress: () => setTodos(filteredTodos)
      },
      {
        text: 'Não'
      }
    ])
  }

  function addNewTodo(description: string) {
    const todo: Todo = {
      id: todos.length + 1,
      userId: 1,
      title: description,
      completed: false
    }

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
        addNewTodo,
        deleteTodo
      }}
    >
      {children}
    </todosContext.Provider>
  )
}
