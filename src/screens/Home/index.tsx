import React, { useContext } from 'react'

import { todosContext } from '../../contexts/Todos'
import BoxTodo from '../../components/BoxTodo'

import { Container, TodoList } from './styles'

const Home: React.FC = () => {
  const { todos } = useContext(todosContext)

  return (
    <Container>
      <TodoList alwaysBounceHorizontal={false}>
        {todos.map(item => (
          <BoxTodo key={item.id} todo={item} />
        ))}
      </TodoList>
    </Container>
  )
}

export default Home
