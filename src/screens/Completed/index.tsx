import React, { useContext, useEffect, useState } from 'react'

import { todosContext } from '../../contexts/Todos'
import BoxTodo from '../../components/BoxTodo'

import { TodoList } from './styles'

const Completed: React.FC = () => {
  const { todos } = useContext(todosContext)

  const [todosCheck, setTodosCheck] = useState([])

  useEffect(() => {
    const todosFiltered = todos.filter(item => item.completed === true)

    setTodosCheck(todosFiltered)
  }, [todos])

  return (
    <TodoList>
      {todosCheck.map(item => (
        <BoxTodo key={item.id} todo={item} />
      ))}
    </TodoList>
  )
}

export default Completed
