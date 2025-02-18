import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/progressBar'
import SnackBar from './components/snackBar'
import TaskFilter from './components/taskFilter'
import TaskForm from './components/taskForm'
import TaskList from './components/taskList'
import ThemeToggle from './components/themeToggle'

function App() {


  return (
 <div className='bg-stone-900 grid py-4 min-h-screen'>

  <TaskForm/>


 </div>
  )
}

export default App
