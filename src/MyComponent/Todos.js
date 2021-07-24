import React from 'react'
import {Todo} from './TodoItem'

export const Todos = (props) => {
  let mystyle = {
    minHeight : "31vh",
  }
    return (
        <div className = "container" style = {mystyle} > 
           <h3 className = " my-3" >Todos List</h3>
         { props.todos === 0 ?"No Todos left!!!":
             (props.todos).map((el) => {
               return (<> <Todo it = {el} key = {el.sno} delete = {props.delete}/> <hr/> </>)
             })
        }   
        </div>
    )
}
