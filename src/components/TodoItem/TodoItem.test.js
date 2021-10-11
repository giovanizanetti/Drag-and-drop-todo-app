import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'

const defaultTodo = {
  id: 1,
  name: 'my todo',
  description: 'skhdbdksjbkjsdbkjdsbksdb',
  completed: true,
}
describe('TodoItem', () => {
  test('should to item render correctely', () => {
    render(<TodoItem todo={defaultTodo} />)
    const todo = screen.getByTitle('todo')
    expect(todo).toHaveTextContent('my todo')
    expect(todo).toBeInTheDocument()
  })

  test('should todo be crossed out when completed', () => {
    render(<TodoItem todo={defaultTodo} />)
    const doneTodo = screen.getByTitle('completed')
    expect(doneTodo).toBeInTheDocument()
  })
})
