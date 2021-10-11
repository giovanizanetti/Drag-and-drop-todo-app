import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '../TodoList/TodoList'
import { initialTodos } from '../../initialdata'

describe('TodoList', () => {
  test('todos are rendered without error', () => {
    const { getAllByTitle } = render(<TodoList />)
    const list = getAllByTitle('todo')
    expect(list).toHaveLength(3)
  })
})
