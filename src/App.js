// import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header'
import {Todos} from './MyComponent/Todos'
import {Footer} from './MyComponent/Footer'
import React , {useState,useEffect}  from 'react'
import {Addtodo} from './MyComponent/Addtodo'
import {About} from './MyComponent/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  // let todos = [
  //   {
  //     sno : 1,
  //     title : "web dev proj",
  //     desc : "learn react and make a decent project"
  //   },
  //   {
  //     sno : 2,
  //     title : "competitive programming",
  //     desc : "solve atleat 8 problems from codeforces"
  //   },
  //   {
  //     sno : 3,
  //     title : "data structures and algoriths",
  //     desc : "watch videos of stl, data structure and algorithm from youtube and unacademy"
  //   }
  // ]
  let intst;
  if(localStorage.getItem("todos")==null){
    intst = [];
  }
  else{
    intst = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, settodos] = useState(intst);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    // console.log(todos);
  }, [todos])
  function ondelete(todo){
    // console.log("I am ondelete function",todo);
    // // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    // console.log(todos);

    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }



  function addtodo(title,desc){
    let srn;
    if(todos.length===0) srn = 1;
    else srn = todos[todos.length-1].sno+1;
    let newtodo = {
       sno:srn,
      title:title,
      desc:desc
    }
    // todos.push(newtodo);
    // console.log(todos);
    // console.log("success");
    settodos([...todos,newtodo]);
  }
  return (
    <>
    <Router>
    <Header title = {"Todos List"}searchbar = {true}/>
    
    <Switch>
          <Route exact path="/" render = {
            ()=>{
              return <> 
               <Addtodo addTodo = {addtodo}/>
    <Todos todos = {todos} delete = {ondelete}/>
    </>
            }
          }>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
