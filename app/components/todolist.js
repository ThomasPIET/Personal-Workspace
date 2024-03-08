"use client";
import ToolCard from "../UI/card";
import React, { useState } from "react";

export default function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");
  const [editing, setEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const updateTask = (index, newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
    setEditing(false);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (editing) {
        updateTask(selectedIndex, updatedTask);
      } else {
        addTask(newTask);
      }
    }
  };

  return (
    <ToolCard>
      <h1 className="text-2xl mb-4">Todolist</h1>
      <div className="flex items-center mb-4">
        <input
          autoFocus
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          className=" px-3 py-2 mr-1 border rounded"
          placeholder="Nouvelle tâche"
        />
        <button
          onClick={() => addTask(newTask)}
          className="px-7 py-2  hover:bg-gray-100 cursor-pointer  border rounded flex items-center justify-center"
        >
          Add
        </button>
      </div>

      {editing && (
        <div className="mb-4">
          <input
            autoFocus
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            onKeyDown={handleKeyPress}
            className="px-3 mr-1 py-2 border rounded"
          />
          <button
            onClick={() => updateTask(selectedIndex, updatedTask)}
            className="px-4 py-2 border hover:bg-white-100 rounded"
          >
            Update
          </button>
        </div>
      )}

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 flex">
            <span className="flex-1 break-all inline-block mr-2">{task}</span>
            <div className="inline-block">
              <button
                onClick={() => {
                  setEditing(true);
                  setUpdatedTask(task);
                  setSelectedIndex(index);
                }}
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer rounded  border"
              >
                Update
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="px-3 py-1  hover:bg-gray-100 cursor-pointer rounded  border"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </ToolCard>
  );
}
