import {React, useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddtask] = useState(false)



  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Jan 22nd at 1500hrs',
        reminder: true
    },
    {
        id: 2,
        text: 'Alx Course Work',
        day: 'Jan 22nd at 2000hrs',
        reminder: true,
    },
    {
        id: 3,
        text: 'Workout',
        day: 'Jan 22nd at 22 00hrs',
        reminder: false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
 
  // Delete Task Func
  const deleteTask  = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: 
      !task.reminder } :task ))
  }

  return (
    <div className='container'>
      <Header 
        onAdd={() => setShowAddtask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ): (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
