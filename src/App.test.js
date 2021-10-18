import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
})
describe('Header', () => {
  let header

  beforeEach(() => {
    render(<App />)
    header = screen.getByTitle('header')
  })

  test('should header render without crashing', () => {
    expect(header).toBeInTheDocument()
  })

  test('should header display the app title', () => {
    const appTitle = 'header.title'
    expect(header).toHaveTextContent(appTitle)
  })
})
