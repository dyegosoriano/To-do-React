import styled from 'styled-components/native'

export const Todo = styled.View`
  border-radius: 4px;
  background: #fff;
  margin-top: 16px;
  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TodoText = styled.Text`
  font-size: 16px;
  flex: 1;
`

export const ButtonOptions = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  margin: 8px;

  align-items: center;
  justify-content: center;
`
