import { Modal } from 'react-bootstrap'
import { TODOS } from '../../config/constants'
import { useLocalStorage } from '../../hooks/useLocalStorege'
import { initialTodos } from '../../initialdata'

import AddTodo from '../AddTodo/AddTodo'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = () => {
  const [todos, setTodos] = useLocalStorage(TODOS, initialTodos)

  const handleCompleted = (id) => {
    let indexToUpdate = todos.findIndex((todo) => todo.id === id)
    const updatedTodos = [...todos]
    updatedTodos[indexToUpdate].completed = !updatedTodos[indexToUpdate].completed
    setTodos(updatedTodos)
  }

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo])
  }
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }
  return (
    <Modal.Dialog>
      <Modal.Body>
        <AddTodo addTodo={(todo) => handleAddTodo(todo)} />
        <ul className='py-4 container'>
          {todos &&
            todos.map((todo) => {
              return (
                <TodoItem key={todo.id} handleCompleted={handleCompleted} handleDelete={handleDelete} todo={todo} />
              )
            })}
        </ul>
      </Modal.Body>
    </Modal.Dialog>
  )
}

export default TodoList
