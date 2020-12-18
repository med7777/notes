import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React, {useState, useEffect} from 'react'
import Editor from './components/Editor'
import Allnotes from './components/List'
import {getNotes} from './helpers/notes'


function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])
 
  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [setNotes])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes])
  }
  const createList = () => {
    setSelectedNote(undefined)
  }
  return (
    <Container>
      <Jumbotron className="main">
       <h1>Notes</h1>
      </Jumbotron>

      

     <Row>
        <Col className="Notelist" sm={12} md={4}>
          <div>
            <Button variant="success" size="sm" className="mb-4 " bloc onClick={createList}>
              Add New Note
            </Button>

          </div>
          <div className="mb-4">
            <Allnotes notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
            <Button variant="info" size="sm" className="mb-4 " bloc onClick={('')}>
              Archive
				</Button>
            
          </div>
        </Col>
        <Col className="changeNote" sm={12} md={8}>
          Title
          <Editor
            refreshList={refreshList}
            selectedNote={selectedNote}
           
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
