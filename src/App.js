import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import List from './components/List'






function App() {
  return (
  <Container>
<Jumbotron>
  NOTES
  </Jumbotron>
  <Row >
    
    <Col style ={{backgroundColor:'#2a2e43'}} xs={12} md={4}> 
     <Button variant="info"style={{ width: '22rem',marginBottom :40,marginTop:15}}>New note</Button> 
  

     <List/>



    </Col>
   <Col style ={{backgroundColor:'#00c6ff'}} xs={12} md={8}>  
   <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="email" placeholder=" " />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicNote">
    <Form.Label>Note</Form.Label>
   <textarea class="form-control" id="inputMessage" rows="5" required></textarea>
  </Form.Group>
  
  <Button variant="primary" type="save">
    Save
  </Button>
  <Button variant="danger">Delete</Button> 
</Form></Col>
  </Row>
  
</Container>
  );
}

export default App;
