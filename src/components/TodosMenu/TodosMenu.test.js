import { render, screen } from '@testing-library/react'
import TodoMenu from './TodoItem'

// const defaultTodo = {
//   id: 1,
//   name: 'my todo',
//   description: 'skhdbdksjbkjsdbkjdsbksdb',
//   completed: true,
// }
describe('TodoMenu', () => {
  test('should todo Menu render without crashing', () => {
    render(<TodoMenu />)
    // const todo = screen.getByTitle('todo')
    // expect(todo).toHaveTextContent('my todo')
    // expect(todo).toBeInTheDocument()
  })
})
