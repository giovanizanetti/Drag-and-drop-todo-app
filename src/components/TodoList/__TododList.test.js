import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '../TodoList/TodoList'

describe('TodoList', () => {
  beforeEach(() => render(<TodoList />))

  test('Should render without error', () => {
    const list = screen.getAllByTitle('todo')
    expect(list).toHaveLength(3)
  })

  test('Should remove correctly todo', () => {
    const todo = screen.getAllByTitle('delete-todo')[1]
    fireEvent.click(todo)
    const list = screen.getAllByTitle('todo')
    expect(list).toHaveLength(2)
  })
})
