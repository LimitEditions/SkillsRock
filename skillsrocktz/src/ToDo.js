import React, { useState } from 'react';
import './ToDo.css';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [taskText, setTaskText] = useState('');

  // Добавление новой задачи
  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = { text: taskText, completed: false };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  // Удаление задачи
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Отметка задачи как выполненной
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task);
    setTasks(updatedTasks);
  };

  // Установка фильтра
  const applyFilter = (filter) => {
    setFilter(filter);
  };

  // Получение списка задач по фильтру
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });
  return (
    <div className="App">
      <section className='todo'>
        <h1>ToDo List</h1>
        <div className='todo__task'>
          <input className='todo__task_text'
            type="text"
            placeholder="Add a new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)} />
          <button className='todo__task_btn' onClick={addTask}>Add Todo</button>
        </div>
        <div className="filter-section">
          <button onClick={() => applyFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
          <button onClick={() => applyFilter('active')} className={filter === 'active' ? 'active' : ''}> Active </button>
          <button onClick={() => applyFilter('completed')} className={filter === 'completed' ? 'active' : ''} > Completed </button>
        </div>
        <ol className='taskList'>
          {filteredTasks.map((task, index) => (
            <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <span className="task-text" onClick={() => toggleTaskCompletion(index)} > {task.text} </span>
              <button className='todo__task_btn' onClick={() => deleteTask(index)} > Delete </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default ToDo;
