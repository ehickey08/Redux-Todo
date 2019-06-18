import React from 'react'

export default function Todo(props) {
    return (
        <>
            <li onClick = {() => props.completeItem(props.item.id)} style={{cursor: "pointer",textDecoration: props.item.completed ? 'line-through' : 'none', listStylePosition: "inside"}}>
                {props.item.value}
            </li>
        </>
    )
}
