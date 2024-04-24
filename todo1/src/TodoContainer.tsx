import React, { useState } from 'react'
import { Todo, AddTodoFunc, ToggleTodoFunc, DeleteTodoFunc } from './types'
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './TodoContainer.css';

const data : Todo[] = [
  {id: 1, title: '프론트엔드 과제', done: false},
  {id: 2, title: '백엔드 과제', done: true},
  {id: 3, title: '웹프 시험공부', done: false}
];

function TodoContainer() {
  const [todoList, setTodoList] = useState<Todo[]>(data);

  const addTodo : AddTodoFunc = (title: string) => {
    const lastIndex = todoList.length - 1;
    const lastId = todoList[lastIndex].id;
    const todo = {id: lastId + 1, title: title, done: false};
    setTodoList([...todoList, todo]);
  }

  const toggleTodo : ToggleTodoFunc = (id: number) => {
    for (let todo of todoList)
      if (todo.id === id) {
        todo.done = !todo.done;
        break;
      }
      setTodoList([...todoList]);
  }

  const deleteTodo : DeleteTodoFunc = (id: number) => {
    setTodoList( todoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="TodoContainer">
      <h1>할일</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoContainer

