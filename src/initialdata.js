import { v4 as generateUUID } from 'uuid'

export const initialTodos = [
  {
    id: generateUUID(),
    name: 'Go to the gin',
    description: 'Every day 6pm for one hour.',
    completed: false,
  },
  {
    id: generateUUID(),
    name: 'Buy groceries',
    description: 'Tomorrow after work. Take reusable bags',
    completed: false,
  },
  {
    id: generateUUID(),
    name: 'Meditate',
    description: 'Every day for 20 minutes.',
    completed: false,
  },
]
