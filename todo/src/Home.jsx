import React, { useState, useEffect } from "react";
import Create from "./Create";
import Typewriter from "typewriter-effect";
import axios from "axios";

function Home({ count, setCount }) {
  const [todos, setTodos] = useState([]);

  const clearTodos = () => {
    setTodos([]);
  };

  // const [updateList, setUpdateList] = useState(0);
  function del(todo) {
    let arr = todos.filter((x) => x.taskID !== todo.taskID);
    console.log("arr:", arr);
    console.log("todos/////////////////", todos);
    setTodos(arr);
    handleDelete(todo._id);
  }
  useEffect(() => {
    setTodos;
  }, [count]);

  function updateComplete(todo) {
    // setTodods(()=>)
    const y = todos.filter((x) => x.taskID == todo.taskID);
    const z = todos.filter((x) => x.taskID != todo.taskID);

    // const ind = todos.indexOf(y);
    let jsonObj = {
      _id: y[0]._id,
      task: y[0].task,
      taskID: y[0].taskID,
      completed: true,
      __v: 0,
    };
    // console.log("jsonobj:", jsonObj);
    // console.log("zzzzz", z);
    // console.log("yyyyyy", y);

    // setTodos(todos.splice(ind, 1));
    clearTodos();
    setTodos([...z, jsonObj]);
    console.log("dddddddddddddddddd:", todos);
    // setTodos([...todos, ...y]);

    console.log("totototot:", todos);
    handleEdit(todo._id);
  }

  useEffect(() => {
    axios
      // http://localhost:3001
      // https://server-todo-kehg.onrender.com
      .get("https://server-todo-kehg.onrender.com/get")
      .then((result) => setTodos(result.data))
      .catch((ero) => console.log(ero));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("https://server-todo-kehg.onrender.com/update" + id)
      .then(console.log("yo put"))
      .catch((ero) => console.log(ero));
  };

  const handleDelete = (id) => {
    axios
      .delete("https://server-todo-kehg.onrender.com/delete" + id)
      .then(console.log("yo delete"))
      .catch((ero) => console.log(ero));
  };

  return (
    <div className="home">
      <div className="introDiv">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Your To-do List")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Get Productive!")
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            delay: 80,
          }}
        />
      </div>
      <Create setCount={setCount} setTodos={setTodos} todos={todos} />
      <div className="itemParent">
        {todos.length == 0 ? (
          <div>
            <h2 id="noTasks">No Tasks Added</h2>
          </div>
        ) : (
          todos.map((todo) => (
            <div key={todo.taskID} className="itemUnit">
              <div className={todo.completed ? "markedItems" : "items"}>
                {todo.task}
              </div>

              <button
                type="button"
                className="different"
                onClick={() => updateComplete(todo)}
              >
                Finish
              </button>
              <button
                type="button"
                className="different"
                id="deleteButton"
                onClick={() => del(todo)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
