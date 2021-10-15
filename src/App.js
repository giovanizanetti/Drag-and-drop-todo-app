import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList/TodoList'
import { Container, Col, Navbar } from 'react-bootstrap'

function App() {
  return (
    <>
      <Navbar title='header' bg='dark'>
        THis is the header
      </Navbar>
      <Container className='d-flex justify-content-center mt-5'>
        <Col s={12} md={8} xl={6}>
          <TodoList />
        </Col>
      </Container>
    </>
  )
}

export default App
