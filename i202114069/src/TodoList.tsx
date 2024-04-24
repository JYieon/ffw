import React from 'react'
import type { Todo, DeleteTodoFunc } from './types'

type Props = {
  todoList: Todo[]
  deleteTodo: DeleteTodoFunc
}

function TodoList({ todoList, deleteTodo }: Props) {
  const confirmDelete = (todo: Todo) => {
    if (window.confirm('삭제하시겠습니까?'))
      deleteTodo(todo.id)
  };
  const trList = todoList.map(todo => (
    <tr key={todo.id}>
      <td>{ todo.id }</td>
      <td>
        { todo.title }
      </td>
      <td>
        { todo.price }
        <span onClick={e => confirmDelete(todo)}>x</span>
      </td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr><td>id</td><td>제품명</td><td>가격</td></tr>
      </thead>
      <tbody>
        {trList}
      </tbody>
    </table>
  )
}

export default TodoList

