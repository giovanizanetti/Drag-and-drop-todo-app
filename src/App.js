import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList/TodoList'
import { Container, Col } from 'react-bootstrap'

function App() {
  return (
    // <div className='container'>
    //   <TodoList />
    // </div>
    <Container className='d-flex justify-content-center mt-5'>
      <Col s={12} md={8} xl={6}>
        <TodoList />
      </Col>
    </Container>
  )
}

export default App
