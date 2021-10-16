import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList/TodoList'
import { Container, Col, Navbar } from 'react-bootstrap'

function App() {
  return (
    <>
      <Navbar title='header' bg='dark'>
        <h1 className='text-light px-5 m-auto'>Simple Todo App</h1>
      </Navbar>
      <Container className='d-flex justify-content-center mt-5'>
        <Col xs={12} sm={8} xl={5}>
          <TodoList />
        </Col>
      </Container>
    </>
  )
}

export default App
