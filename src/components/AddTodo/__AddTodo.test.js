import { render, screen, fireEvent } from '@testing-library/react'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'

const setup = (title) => {
  const utils = render(<AddTodo />)
  const input = utils.getByTitle(title)
  return {
    input,
    ...utils,
  }
}

describe('AddTodo inputs', () => {
  test('should todo name input update correctely', () => {
    const newValue = 'new todo'
    const emptyValue = ''
    const { input } = setup('name')
    fireEvent.change(input, { target: { value: newValue } })
    expect(input.value).toBe(newValue)
    fireEvent.change(input, { target: { value: emptyValue } })
    expect(input.value).toBe(emptyValue)
  })

  test('should todo description input update correctly', () => {
    const newValue = 'new description'
    const emptyValue = ''
    const { input } = setup('description')
    fireEvent.change(input, { target: { value: newValue } })
    expect(input.value).toBe(newValue)
    fireEvent.change(input, { target: { value: emptyValue } })
    expect(input.value).toBe(emptyValue)
  })
})

describe('AddTodo submit', () => {
  test('should alert be shown if user try to add a todo with no name', () => {
    render(<AddTodo />)
    const button = screen.getByTitle('addtodo-button')
    fireEvent.click(button)
    const text = 'add_todo.name.alert'
    const alert = screen.getByText(text)

    expect(alert).toBeTruthy()
  })

  test('should todo not be added when no todo name is provided', () => {
    render(<TodoList />)
    const button = screen.getByTitle('addtodo-button')
    fireEvent.click(button)
    const todos = screen.getAllByTitle('todo').length
    expect(todos).toBe(3)
  })

  test('should todo be added and correctly with name and description', () => {
    render(<TodoList />)
    const todoNameValue = 'go tot the gin'
    const todoNameInput = screen.getByTitle('name')
    fireEvent.change(todoNameInput, { target: { value: todoNameValue } })

    const todoDescriptionValue = 'today at 4pm, bring bags'
    const todoDescriptionInput = screen.getByTitle('description')
    fireEvent.change(todoDescriptionInput, { target: { value: todoDescriptionValue } })

    const button = screen.getByTitle('addtodo-button')
    fireEvent.click(button)

    const todos = screen.getAllByTitle('todo')
    expect(todos[3]).toHaveTextContent(todoNameValue)
    expect(todos.length).toBe(4)
  })
})
