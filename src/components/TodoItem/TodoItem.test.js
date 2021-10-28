import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'

const defaultTodo = {
  id: 1,
  name: 'my todo',
  description: 'skhdbdksjbkjsdbkjdsbksdb',
  completed: true,
}
describe('TodoItem', () => {
  beforeEach(() => render(<TodoItem todo={defaultTodo} />))

  test('should to item render correctely', () => {
    const todo = screen.getByTitle('todo')
    expect(todo).toHaveTextContent('my todo')
    expect(todo).toBeInTheDocument()
  })

  test('should todo be crossed out when completed', () => {
    const doneTodo = screen.getByTitle('todo-name')
    const className = 'line-through'
    expect(doneTodo).toHaveClass(className)
  })
  test('should todo display icon showing that there is a description inside', () => {
    const hasDescriptionIcon = screen.getByTitle('description-icon')
    expect(hasDescriptionIcon).toBeInTheDocument()
  })
})
