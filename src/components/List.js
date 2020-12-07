import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import {notes} from '../helper/notes';


export default function List(){

	return(

<ListGroup>

{notes.map((note,index)=><ListGroup.Item className="list-group-item list-group-item-action" active={index===0} as= "li">{note.title}</ListGroup.Item>)}

</ListGroup>
		)
}


