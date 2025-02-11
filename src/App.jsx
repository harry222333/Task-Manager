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
 <div>
  <h1 class="text-4xl font-bold underline">hello hamzaaaaa</h1>
  <ProgressBar/>
  <SnackBar/>
  <TaskFilter/>
  <TaskForm/>
  <TaskList/>
  <ThemeToggle/>

 </div>
  )
}

export default App
