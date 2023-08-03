import { useState } from 'react';

import AddTask from './components/add-task';
import TodoList from './components/todo-list';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text) => {
    const updatedTasks = [...tasks, { id: nextID++, text: text }]
    setTasks(updatedTasks);
  }
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  return (
    <div class='flex min-h-screen bg-gradient-to-b from-cyan-500 to-purple-950 justify-center'>
      <div class='bg-slate-50 basis-3/4 border-4 shrink'>
        <h1 class='font-serif text-5xl text-center mt-10'>My Todos!</h1>
        <AddTask onAddTask={handleAddTask}/>
        <TodoList tasks={tasks} onDelete={handleDeleteTask}/>
      </div>  
    </div>
  );
}

export default App;

const initialTasks = [
  { id: 0, text: 'Read PE05 Instructions'},
  { id: 1, text: 'Create a new react app called todos-app'},
  { id: 2, text: 'Create initial tasks list'}
]

let nextID = 3;
