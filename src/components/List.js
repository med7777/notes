import React from 'react'
import {ListGroup} from 'react-bootstrap'



export default function Allnotes({selectedNote, setSelectedNote, notes, showArchive, setShowArchive,
  isArchived }) {
 

  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  return (
    <>
      <ListGroup as="ul">
        {notes.map((note, index) => (
          <ListGroup.Item
            variant="info"
            active={selectedNote ? note.id === selectedNote.id : false}
            onClick={() => onSelectNote(note)}
            
            as="li"
          >
            {note.title}
            
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}
