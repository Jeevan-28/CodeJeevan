import React from 'react';
import "./todolist.css";
import { useState, useEffect } from 'react';


const TodoList = () => {

  // const firststate = {
  // 	newtask: "",
  //   };

  const [data, setData] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [todoData, setToDoData] = useState([]);
  const [doneTaskData, setDoneTaksData] = useState([]);

  // const [donestate, setdoneState]= useState(firststate);

  const doneTask = (data, index) => {

    let newState = [...doneTaskData];
    newState.push(data);
    setDoneTaksData(newState);

    let todoDataCopy = [...todoData];
    todoDataCopy.splice(index, 1);
    setToDoData([...todoDataCopy]);


  }

  const addNewTask = () => {
    let newState = [...todoData];
    newState.push(taskName);
    setToDoData(newState);
    setTaskName('');
  }

  return (

    <>
      <div>
        <div >
          <div >
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Add a task"
                  value={taskName}
                  className="todotext"
                  onChange={(e) => { setTaskName(e.target.value) }}
                />
              </div>

              <button
                type="button"
                className="buttonx"
                onClick={addNewTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px' }} className="">
        <div>
          <table>
            <thead>
              <tr>
                <th >#</th>
                <th >Task</th>

                <th >Actions</th>

              </tr>
            </thead>
            <tbody>
              {todoData.map((todo, index) => {
                return (

                  <tr>
                    <th>{index + 1}</th>
                    <td>{todo}</td>
                    <td>
                      <button type='button' onClick={() => { doneTask(todo, index) }}>Mark it done</button>
                    </td>

                  </tr>

                )
              })}


            </tbody>
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th >#</th>
                <th >Task</th>

                <th >Status</th>

              </tr> 
            </thead>
            <tbody>
              {doneTaskData.map((doneTask, index) => {
                return (

                  <tr>
                    <th>{index + 1}</th>
                    <td>{doneTask}</td>

                    <td>
                      <button>Completed</button>
                    </td>
                  </tr>

                )
              })}


            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TodoList