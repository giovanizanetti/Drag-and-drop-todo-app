import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '../TodoList/TodoList'
import { initialTodos } from '../../initialdata'

describe('TodoList', () => {
  test('todos are rendered without error', () => {
    const { getAllByTitle } = render(<TodoList />)
    const list = getAllByTitle('todo')
    expect(list).toHaveLength(3)
  })

  test('should todo be removed correctely', () => {
    const { getAllByTitle } = render(<TodoList />)
    const todo = getAllByTitle('delete-todo')[1]
    fireEvent.click(todo)
    const list = getAllByTitle('todo')
    expect(list).toHaveLength(2)
  })
})
