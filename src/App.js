import {React, useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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
      <Header />
     {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
     ): (
      'No Tasks To Show'
     )}
    </div>
  );
}

export default App;
