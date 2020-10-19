import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 16px;

  height: 97%;
  justify-content: space-between;
`

export const TodoList = styled.ScrollView`
  width: 100%;
`
export const BoxAddNewTodo = styled.View`
  border-radius: 16px;
  background: #fff;
  margin: 16px 0;
  height: 60px;

  flex-direction: row;
`

export const DescriptionTodo = styled.TextInput`
  padding-left: 32px;
  flex: 1;
`

export const ButtonNewTodo = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  border-radius: 16px;
  background: #ff1744;

  justify-content: center;
  align-items: center;
`
