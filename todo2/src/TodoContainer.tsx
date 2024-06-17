import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Todo, AddTodoFunc, ToggleTodoFunc, DeleteTodoFunc } from './types'
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './TodoContainer.css';

axios.defaults.baseURL = "http://localhost:3003";

function TodoContainer() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const reloadTodo = async () => {
    const response = await axios.get("/todos");
    const todoList: Todo[] = response.data;
    setTodoList(todoList);
  }

  const addTodo : AddTodoFunc = async (title: string) => {
    const todo = {id: 0, title: title, done: false};
    await axios.post("/todos", todo);
    reloadTodo();
  }

  const toggleTodo : ToggleTodoFunc = async (id: number) => {
    let todo = todoList.find(todo => todo.id === id);
    if (!todo) throw new Error("id not found");
    let updatedTodo = {...todo, done: !todo.done };
    await axios.put("/todos/" + updatedTodo.id, updatedTodo);
    reloadTodo();
  }

  const deleteTodo : DeleteTodoFunc = async (id: number) => {
    await axios.delete("/todos/" + id);
    reloadTodo();
  }

  useEffect(() => { reloadTodo(); }, []);

  return (
    <div className="TodoContainer">
      <h1>할일</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoContainer

