import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons'

import { todosContext } from '../../contexts/Todos'

import { ButtonOptions, Todo, TodoText } from './styles'

const BoxTodo: React.FC = ({ todo }) => {
  const { deleteTodo } = useContext(todosContext)

  return (
    <Todo>
      <TodoText>{todo.title}</TodoText>

      <ButtonOptions>
        <Feather
          name={todo.completed ? 'check-circle' : 'circle'}
          color={todo.completed ? '#00c853' : '#b0bec5'}
          size={24}
        />
      </ButtonOptions>

      <ButtonOptions onPress={() => deleteTodo(todo.id)}>
        <Feather name="x" size={24} color="#ff1744" />
      </ButtonOptions>
    </Todo>
  )
}

export default BoxTodo
