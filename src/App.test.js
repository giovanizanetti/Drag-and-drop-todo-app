import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
})
test('renders header without crashing', () => {
  render(<App />)
  const header = screen.getByTitle('header')

  expect(header).toBeInTheDocument()
})
