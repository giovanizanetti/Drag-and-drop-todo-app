import { Card, Accordion } from 'react-bootstrap'
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
  const handleUpdate = (e, id, field) => {
    let indexToUpdate = todos.findIndex((todo) => todo.id === id)
    const updatedTodos = [...todos]
    const newValue = field === 'completed' ? !updatedTodos[indexToUpdate].completed : e.target.value
    updatedTodos[indexToUpdate][field] = newValue
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
    <Card className='mx-auto my-5 w-md-50'>
      <Card.Body>
        <AddTodo addTodo={(todo) => handleAddTodo(todo)} />
        <Accordion defaultActiveKey='0' flush={true}>
          {todos &&
            todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  handleCompleted={handleCompleted}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                  todo={todo}
                />
              )
            })}
        </Accordion>
      </Card.Body>
    </Card>
  )
}

export default TodoList
