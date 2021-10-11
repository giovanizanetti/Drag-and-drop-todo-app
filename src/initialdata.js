import { v4 as generateUUID } from 'uuid'

export const initialTodos = [
  {
    id: generateUUID(),
    name: 'delectus aut autem',
    description: 'skhdbdksjbkjsdbkjdsbksdb',
    completed: true,
  },
  {
    id: generateUUID(),
    name: 'quis ut nam facilis et officia qui',
    description: 'skhdbdksjbkjsdbkjdsbksdb',
    completed: false,
  },
  {
    id: generateUUID(),
    name: 'fugiat veniam minus',
    description: 'skhdbdksjbkjsdbkjdsbksdb',
    completed: false,
  },
]
