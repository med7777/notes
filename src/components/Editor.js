import 'bootstrap/dist/css/bootstrap.min.css'
import * as Notes from '../helpers/notes'
import React, {useState, useEffect,} from 'react'
import Alert from 'react-bootstrap/Alert'

import {Button, Form} from 'react-bootstrap'
import '../App.css'


export default function Editor({selectedNote, refreshList, setSelectedNote, showArchive, setShowArchive,
  isArchived}) {
  

  const [title, setTitle] = useState('')
  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
    setTitle('')
  }, [selectedNote])

  const onInputTitle = (e) => setTitle(e.target.value)
  const [body, setBody] = useState('')
  const onInputBody = (e) => setBody(e.target.value)
 

  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setBody('')
  }, [selectedNote])
  
  const [status, setStatus] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setStatus('')
    }, 2000)
  }, [status])
  const [variant, setVariant] = useState('')
  useEffect(
    () => {
      if (selectedNote) return setVariant('')
    },
    [variant, selectedNote]
  )

  const onSave = (e) => {
    e.preventDefault()

    setBody('')
    setTitle('')
    

    if (selectedNote) {
      Notes.updateNote(selectedNote.id, title, body)
    
    setStatus('NOTE UPDATED')
      return refreshList()
    }
    Notes.createNote(title, body)
    
   setStatus('NOTE CREATED')

    refreshList()
  }
  const onDelete = (e) => {
    e.preventDefault()
    if (selectedNote) {
      Notes.deleteNote(selectedNote.id, title, body)
      setBody('')
      setTitle('')
      setStatus('NOTE DELETED')
    
      refreshList()
    }
  }
 /* const handleArchive = (e) => {
    e.preventDefault()
    if (isArchived) {
      unArchiveNote(selectedNote)
    } else {
      archiveNote(selectedNote)
    }
    refreshList()
    setTitle('')
  }
const buttonStyles = {
  marginRight: {
    marginRight: 10
  },
  marginBottom: {
    marginBottom: 20
  }
}*/
  return (
    <div>
    {status && (
        <Alert className="NB" variant={variant}>
          {status}
        </Alert>
      )}
      <Form>
        <Form.Group controlId="title">
         
          <Form.Control
            
           
            
            value={title}
            onChange={onInputTitle}
          />
        </Form.Group>

        <Form.Group controlId="description">
         New note
          <Form.Control
            as="textarea"
            rows={8}
          
            //value={selectedNote ? selectedNote.body : body}
            value={body}
            onChange={onInputBody}
          />
        
        </Form.Group>
      </Form>
      <Button
        variant="success"
        size="sm"
        className="saveButton"
        onClick={onSave}
      >
        Save
      </Button>
      {selectedNote && (
        <Button variant="danger" size="sm" className="deleteButton " onClick={onDelete}>
          Delete
        </Button>
      )}
     
    </div>
  )
}
