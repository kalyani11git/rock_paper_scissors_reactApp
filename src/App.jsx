import { useState } from 'react'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingValue(tasks[index]);
  };

  const handleSaveTask = (index) => {
    const newTasks = tasks.map((task, i) => (i === index ? editingValue : task));
    setTasks(newTasks);
    setEditingIndex(null);
    setEditingValue('');
  };

  return (
    <>
      <div className='h-screen w-auto flex flex-wrap justify-center items-center flex-col'>
        <div className='flex flex-wrap justify-evenly items-center flex-col gap-3'>
          <div className='border-2 border-black p-3'>
            <input 
              type="text" 
              value={inputValue} 
              placeholder='Enter Task' 
              onChange={(e) => setInputValue(e.target.value)} 
            />
            <button 
              className='mx-2 bg-green-700 p-2 rounded-md' 
              type="button" 
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
          {tasks.map((task, index) => (
            <div key={index} className='flex flex-wrap flex-row justify-between w-full border-2 border-black p-3'>
              {editingIndex === index ? (
                <>
                  <input 
                    type="text" 
                    value={editingValue} 
                    onChange={(e) => setEditingValue(e.target.value)} 
                  />
                  <button 
                    className='bg-blue-700 p-2 rounded-md' 
                    type="button" 
                    onClick={() => handleSaveTask(index)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h1>{task}</h1>
                  <div>
                    <button 
                      className='bg-yellow-500 p-2 rounded-md mr-2' 
                      type="button" 
                      onClick={() => handleEditTask(index)}
                    >
                      Edit
                    </button>
                    <button 
                      className='bg-red-700 p-2 rounded-md' 
                      type="button" 
                      onClick={() => handleDeleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
