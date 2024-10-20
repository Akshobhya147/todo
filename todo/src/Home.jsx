import React, { useState, useEffect } from "react";
import Create from "./Create";
import Typewriter from "typewriter-effect";
import axios from "axios";

function Home({ count, setCount }) {
  const [todos, setTodos] = useState([]);
  // const [updateList, setUpdateList] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((ero) => console.log(ero));
  }, [count]);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update" + id)
      .then(location.reload())
      .catch((ero) => console.log(ero));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete" + id)
      .then(location.reload())
      .catch((ero) => console.log(ero));
  };

  return (
    <div className="home">
      <div className="introDiv">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi! This is your personalized To-Do List.")
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
      <Create setCount={setCount} />
      <div className="itemParent">
        {todos.length == 0 ? (
          <div>
            <h2 id="noTasks">No Taks Added</h2>
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
                onClick={() => {
                  handleEdit(todo._id);
                }}
              >
                Finish
              </button>
              <button
                type="button"
                className="different"
                id="deleteButton"
                onClick={() => handleDelete(todo._id)}
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
