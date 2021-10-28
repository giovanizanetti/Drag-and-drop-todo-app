import { render, screen, fireEvent } from '@testing-library/react'
import AddTodo from './AddTodo'
import TodoList from '../TodoList/TodoList'
import { NAME, DESCRIPTION } from '../../config/constants'

const setup = (title) => {
  const utils = render(<AddTodo />)
  const input = utils.getByTitle(title)
  return {
    input,
    ...utils,
  }
}

describe('Inputs', () => {
  const newValue = 'newValue'
  const emptyValue = ''

  it('Should name update correctely', () => {
    const { input } = setup(NAME)
    fireEvent.change(input, { target: { value: newValue } })
    expect(input.value).toBe(newValue)
    fireEvent.change(input, { target: { value: emptyValue } })
    expect(input.value).toBe(emptyValue)
  })

  it('Should description update correctly', () => {
    const { input } = setup(DESCRIPTION)
    fireEvent.change(input, { target: { value: newValue } })
    expect(input.value).toBe(newValue)
    fireEvent.change(input, { target: { value: emptyValue } })
    expect(input).toHaveTextContent(emptyValue)
  })

  it('Should validate name characters limit', () => {
    const longLenthValue = 'this value has more than 13 characters'
    const { input } = setup(NAME)
    fireEvent.change(input, { target: { value: longLenthValue } })
    expect(input).not.toHaveTextContent(longLenthValue)
  })
})

describe('Submit', () => {
  it('Should display an alert when name is empty', () => {
    render(<AddTodo />)
    const button = screen.getByTitle('addtodo-button')
    fireEvent.click(button)
    const text = 'add_todo.name.no_length_alert'
    const alert = screen.getByText(text)
    expect(alert).toBeTruthy()
  })

  it('Should not be added when name is not provided', () => {
    render(<TodoList />)
    const button = screen.getByTitle('addtodo-button')
    fireEvent.click(button)
    const todos = screen.getAllByTitle('todo').length
    expect(todos).toBe(3)
  })

  it('Should add name and description correctly', () => {
    render(<TodoList />)
    const todoNameValue = 'go to the gin'
    const todoNameInput = screen.getAllByTitle(NAME)[0]
    fireEvent.change(todoNameInput, { target: { value: todoNameValue } })

    const todoDescriptionValue = 'today at 4pm, bring bags'
    const todoDescriptionInput = screen.getAllByTitle(DESCRIPTION)[0]
    fireEvent.change(todoDescriptionInput, { target: { value: todoDescriptionValue } })

    const button = screen.getByTitle('addtodo-button')
    fireEvent.click(button)

    const todos = screen.getAllByTitle('todo')
    expect(todos[3]).toHaveTextContent(todoNameValue)
    expect(todos.length).toBe(4)
  })
})
