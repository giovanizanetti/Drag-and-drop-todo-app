import { Card, Accordion } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { TODOS } from '../../config/constants'
import { useLocalStorage } from '../../hooks/useLocalStorege'
import { initialTodos } from '../../initialdata'
import { COMPLETED } from '../../config/constants'

import AddTodo from '../AddTodo/AddTodo'
import TodoItem from '../TodoItem/TodoItem'
import TodosMenu from '../TodosMenu/TodosMenu.js'

const TodoList = () => {
  const [todos, setTodos] = useLocalStorage(TODOS, initialTodos)

  const handleUpdate = (value, id, field) => {
    let updatedTodos
    const indexToUpdate = todos.findIndex((todo) => todo.id === id)
    const items = [...todos]
    const toggleDone = !items[indexToUpdate].completed
    const newValue = field === COMPLETED ? toggleDone : value
    items[indexToUpdate][field] = newValue
    updatedTodos = items
    setTodos(updatedTodos)
  }

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo])
  }

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  const hanldeDeleteAll = () => {
    setTodos([])
  }

  const handleDragEnd = (result) => {
    if (!result.destination) return
    let updatedTodos
    const items = [...todos]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    updatedTodos = items
    setTodos(updatedTodos)
  }

  return (
    <Card className='mx-auto my-5 w-md-50'>
      <Card.Body>
        <TodosMenu handleDeleteAll={hanldeDeleteAll} />
        <AddTodo addTodo={(todo) => handleAddTodo(todo)} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='"droppable-todos' type='TODO'>
            {(provided) => {
              return (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Accordion defaultActiveKey='0' flush={true}>
                    {todos &&
                      todos.map((todo, index) => {
                        return (
                          <Draggable type='TODO' key={todo.id} draggableId={todo.id.toString()} index={index}>
                            {(provided) => {
                              return (
                                <TodoItem
                                  provided={provided}
                                  handleDelete={handleDelete}
                                  handleUpdate={handleUpdate}
                                  todo={todo}
                                />
                              )
                            }}
                          </Draggable>
                        )
                      })}
                  </Accordion>
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </DragDropContext>
      </Card.Body>
    </Card>
  )
}

export default TodoList
