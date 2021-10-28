import { render, screen, act } from '@testing-library/react'
import TodoList from '../TodoList/TodoList'

describe('TodoMenu', () => {
  test('should todo Menu render without crashing', () => {
    act(() => {
      render(<TodoList />)
      const menuToggle = screen.getByTitle('menu-toggle')
      expect(menuToggle).toBeInTheDocument()
    })
  })
})
