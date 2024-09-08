import './App.css';
import Bg from "./MyComponents/Bg";
import Header from "./MyComponents/header";
import About from "./MyComponents/About";
import AddTodoForm from "./MyComponents/AddTodoForm";
import Todos from "./MyComponents/Todos";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  let initTodoList;
  if (localStorage.getItem("todoList") != null) {
    initTodoList = JSON.parse(localStorage.getItem("todoList"));
  } else {
    initTodoList = [];
  }

  const [todoList, setTodoList] = useState(initTodoList);

  // adding new item in todos list 
  const addNewTodo = (title, description) => {
    let sno;
    if (todoList.length === 0) {
      sno = 0;
    } else {
      sno = todoList[todoList.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      description: description
    }

    // setTodoList([...todoList, newTodo]);
    setTodoList((todoList) => [...todoList, newTodo]);
    console.log('i am adding this todo', sno, title, description, newTodo);

  }


  // deleting items from todos list 
  const onDelete = (listItem) => {
    console.log("delete", listItem);
    // console.log("length", todoList.length);
    setTodoList(todoList.filter((e) => {
      return e !== listItem;
    }))

    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  // updating to do list with every action 
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <Router>
        <Bg />
        <Header />
        <Routes>

          <Route path="/" element={
            <>
              <AddTodoForm addNewTodo={addNewTodo} />
              <Todos todoList={todoList} onDelete={onDelete} />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
