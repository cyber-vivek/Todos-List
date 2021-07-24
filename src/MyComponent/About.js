import React from 'react'
import './Aboutc.css';

export const About = () => {
    return (
        <div className = "divstyle" id = "parent" >
          <h3 className = "hstyle" >Good To See You Here</h3>
          <h4>Here is a quick explanation how you can use this app</h4>
          <p className = "pstyle">
              <span>&#8680;</span> This is my first singal page application app using React. <br />
              <span>&#8680;</span> Open from the same device where you added the Todos.
             <br />
             <span>&#8680;</span> You can add as many Todos as you want and delete them when completed without creating an account. 
          </p>
        </div>
    )
}
