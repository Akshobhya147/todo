import React, { useState, useEffect } from "react";
import axios from "axios"; //HTTP request-response library
function Create({ setCount }) {
  const [task, setTask] = useState();

  const taskAddHandler = () => {
    let date = new Date();
    // console.log("what:", setCount);
    setCount(date.toString());
    if (task != null && task != "") {
      console.log("arre:", task);
      axios
        .post("http://localhost:3001/add", {
          task: task,
          taskID: date.getTime(),
        })
        .then(location.reload())
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
        // onKeyDown={enterExecution}
        onChange={(e) => {
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
