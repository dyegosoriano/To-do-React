import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
import { log } from 'react-native-reanimated'

export const todosContext = createContext({})

interface Todo {
  id: number
  userId: number
  title: string
  completed: boolean
}

export default function todosProvider({ children }: any) {
  const [loading, setLoading] = useState<Boolean>(true)
  const [todos, setTodos] = useState<Todo[]>([])

  async function getTodos() {
    try {
      const storageTodos = await AsyncStorage.getItem('@To-do:list')

      if (storageTodos) {
        setTodos(JSON.parse(storageTodos))
      } else {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        ).then(response => response.json())

        setTodos(response)
      }

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

  function updateStatus(id: number) {
    let index: any = todos.find(item => item.id === id)

    index.completed = !index.completed

    setTodos([...todos])
  }

  useEffect(() => {
    getTodos()
  }, [])

  useEffect(() => {
    const updateStorage = async () => {
      await AsyncStorage.setItem('@To-do:list', JSON.stringify(todos))
    }

    updateStorage()
  }, [todos])

  return (
    <todosContext.Provider
      value={{
        todos,
        loading,
        updateStatus,
        addNewTodo,
        deleteTodo
      }}
    >
      {children}
    </todosContext.Provider>
  )
}
