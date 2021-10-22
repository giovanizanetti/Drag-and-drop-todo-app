import { render, screen } from '@testing-library/react'
import TodoMenu from './TodosMenu.js'

// const defaultTodo = {
//   id: 1,
//   name: 'my todo',
//   description: 'skhdbdksjbkjsdbkjdsbksdb',
//   completed: true,
// }
describe('TodoMenu', () => {
  test('should todo Menu render without crashing', () => {
    render(<TodoMenu />)
    // const todo = screen.getByTitle('todo-menu')
    // expect(todo).toHaveTextContent('my todo')
    // expect(todo).toBeInTheDocument()
  })
})
