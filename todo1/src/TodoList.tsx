import React from 'react'
import type { Todo, ToggleTodoFunc, DeleteTodoFunc } from './types'

type Props = {
  todoList: Todo[]
  toggleTodo: ToggleTodoFunc,
  deleteTodo: DeleteTodoFunc
}

function TodoList({ todoList, toggleTodo, deleteTodo }: Props) {
  const confirmDelete = (todo: Todo) => {
    if (window.confirm('삭제하시겠습니까?'))
      deleteTodo(todo.id)
  };
  const trList = todoList.map(todo => (
    <tr key={todo.id}>
      <td>{ todo.id }</td>
      <td>
        <input type='checkbox' checked={ todo.done } onChange={e => toggleTodo(todo.id)} />
        { todo.title }
        <span onClick={e => confirmDelete(todo)}>x</span>
      </td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr><td>id</td><td>할일</td></tr>
      </thead>
      <tbody>
        {trList}
      </tbody>
    </table>
  )
}

export default TodoList

