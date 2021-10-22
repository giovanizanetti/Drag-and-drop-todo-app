import { render, screen } from '@testing-library/react'
import TodoDetails from './TodoDetails'

const defaultTodo = {
  id: 1,
  name: 'my todo',
  description: 'Nice description',
  completed: true,
}
describe('TodoDetails', () => {
  test('should todo description render correctly', () => {
    render(<TodoDetails todo={defaultTodo} />)
    const todoDescription = screen.getByTitle('todo-details')
    expect(todoDescription).toBeInTheDocument()
  })
})
