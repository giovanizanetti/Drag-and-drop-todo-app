import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '../TodoList/TodoList'
import { initialTodos } from '../../initialdata'

describe('TodoList', () => {
  beforeEach(() => render(<TodoList />))

  test('should todos render without error', () => {
    const list = screen.getAllByTitle('todo')
    expect(list).toHaveLength(3)
  })

  test('should todo be removed correctly', () => {
    const todo = screen.getAllByTitle('delete-todo')[1]
    fireEvent.click(todo)
    const list = screen.getAllByTitle('todo')
    expect(list).toHaveLength(2)
  })
})
