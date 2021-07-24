import React from 'react'

export const Todo = (props) => {
    return (
        <div>
           <h4>{props.it.title}</h4>
           <p>{props.it.desc}</p>
           <button className = "btn btn-danger btn-sm" onClick = {()=>{props.delete(props.it)}}>Delete</button>
        </div>
    )
}
