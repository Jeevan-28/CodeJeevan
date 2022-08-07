import React from 'react';
import "./todolist.css";
import { useState, useEffect } from 'react';


const TodoList2 = () => {

  // const firststate = {
  // 	newtask: "",
  //   };

  const [data, setData] = useState([]);
  const[newTaskData, setnewTaskData]= useState([]);
  const[toDoData, settoDoData]= useState([]);

  const[taskName, setTaskName] = useState('');


 const setTask = ()=> {
     let newadd = [...newTaskData];
     newadd.push(taskName);
     setnewTaskData(newadd);
     setTaskName('');
 }


 const doneTask = (data,index)=> {

  let newtask = [...toDoData];
  newtask.push(data);
  settoDoData(newtask);

  let newdata = [...newTaskData];
  newdata.splice(index, 1);
  setnewTaskData(newdata);
  


 }

const deleteTask = (data, index)=> {
  let newfun = [...toDoData];
  newfun.splice(index, 1);
  settoDoData(newfun);

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
                  onChange={(e)=>{ setTaskName(e.target.value)}}
              
                />
              </div>

              <button
                type="button"
                className="buttonx"
                onClick={setTask}
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
              {newTaskData.map((todo, index) => {
                return (

                  <tr>
                    <th>{index + 1}</th>
                    <td>{newTaskData}</td>
                    <td>
                      <button type='button' onClick={()=>{doneTask(todo,index)}} >Mark it done</button>
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
               { toDoData.map((doneTask, index)=>{
                return (

                  <tr>
                    <th>{index + 1}</th>
                    <td>{toDoData}</td>

                    <td>
                      <button>Completed</button>
                      <button onClick={()=>{deleteTask(doneTask, index)}}>Clear</button>
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

export default TodoList2