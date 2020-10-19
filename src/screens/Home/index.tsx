import React, { useContext, useState } from 'react'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { todosContext } from '../../contexts/Todos'
import BoxTodo from '../../components/BoxTodo'

import {
  BoxAddNewTodo,
  ButtonNewTodo,
  Container,
  DescriptionTodo,
  TodoList
} from './styles'

const Home: React.FC = () => {
  const { todos, addNewTodo } = useContext(todosContext)

  const [description, setDescription] = useState('')

  function handlePressButton() {
    if (!description) {
      Alert.alert(
        'Ops!!!',
        'Você precisa inserir uma descrição para criar uma nova tarefa'
      )
      return
    }

    addNewTodo(description)
    setDescription('')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <Container>
        <TodoList alwaysBounceHorizontal={false}>
          {todos.map(item => (
            <BoxTodo key={item.id} todo={item} />
          ))}
        </TodoList>

        <BoxAddNewTodo>
          <DescriptionTodo
            placeholder="Insira aqui uma nova tarefa."
            onChangeText={text => setDescription(text)}
            value={description}
          />

          <ButtonNewTodo onPress={handlePressButton}>
            <Feather name="plus" size={24} color="#fff" />
          </ButtonNewTodo>
        </BoxAddNewTodo>
      </Container>
    </KeyboardAvoidingView>
  )
}

export default Home
