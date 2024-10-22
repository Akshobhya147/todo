import React, { useState, useEffect } from "react";
import axios from "axios"; //HTTP request-response library
function Create({ setCount, setTodos, todos }) {
  const [task, setTask] = useState();

  const [clear, setClear] = useState(false);
  const taskAddHandler = () => {
    let date = new Date();
    // console.log("what:", setCount);

    let jsonObj = {
      _id: "anything",
      task: task,
      taskID: date.getTime(),
      completed: false,
      __v: 0,
    };

    setClear(false);

    setTodos([...todos, jsonObj]);
    console.log(todos);
    setCount(date.toString());

    if (task != null && task != "") {
      console.log("arre:", task);
      axios
        .post("https://server-todo-kehg.onrender.com/add", {
          task: task,
          taskID: date.getTime(),
        })
        .then(console.log("yo added"))
        .catch((ero) => console.log(ero));
    }
  };
  //   const enterExecution = (e) => {
  //     e.key == "Enter" && task != null ? setKey(true) : setKey(false);
  //     //
  //   };
  return (
    <div className="createTab">
      <input
        type="text"
        name="task_name"
        className="newTaskInput"
        placeholder="Create a Task"
        value={clear ? task : ""}
        // onKeyDown={enterExecution}
        onChange={(e) => {
          setClear(true);
          setTask(e.target.value);
        }}
      ></input>
      <button type="button" className="addButton" onClick={taskAddHandler}>
        Add
      </button>
    </div>
  );
}
export default Create;
