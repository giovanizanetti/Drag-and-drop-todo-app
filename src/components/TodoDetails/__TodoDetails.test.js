import { render, screen } from '@testing-library/react'
import TodoDetails from './TodoDetails'

const defaultTodo = {
  id: 1,
  name: 'my todo',
  description: 'Nice description',
  completed: true,
}
describe('TodoDetails', () => {
  test('should to item render correctely', () => {
    // render(<TodoDetails todo={defaultTodo} />)
    // const todo = screen.getByTitle('todo-details')
    // expect(todo).toHaveTextContent('my todo')
    // expect(todo).toBeInTheDocument()
  })

  // test('should to be editable', () => {
  //   render(<TodoDetails todo={defaultTodo} />)
  //   // const doneTodo = screen.getByTitle('completed')
  //   // expect(doneTodo).toBeInTheDocument()
  // })
})
