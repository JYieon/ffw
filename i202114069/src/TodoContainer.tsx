import React, { useState } from 'react'
import { Todo, AddTodoFunc,  DeleteTodoFunc } from './types'
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import './TodoContainer.css';

const data : Todo[] = [
  {id: 1, title: '콜라', price: 1500, done: false},
  {id: 2, title: '우유', price: 2000, done: true},
  {id: 3, title: '맥주', price: 2500, done: false}
];

function TodoContainer() {
  const [todoList, setTodoList] = useState<Todo[]>(data);

  const addTodo : AddTodoFunc = (title: string, price: number) => {
    const lastIndex = todoList.length - 1;
    const lastId = todoList[lastIndex].id;
    const todo = {id: lastId + 1, title: title, price: price, done: false};
    setTodoList([...todoList, todo]);
  }

  const deleteTodo : DeleteTodoFunc = (id: number) => {
    setTodoList( todoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="TodoContainer">
      <h1>제품</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoContainer

