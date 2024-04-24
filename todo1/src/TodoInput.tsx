import React, { useState } from 'react'
import type { AddTodoFunc } from './types'

type Props = {
  addTodo : AddTodoFunc
}

function TodoInput({ addTodo }: Props) {
  const [title, setTitle] = useState<string>('');
  const onClick = () => { addTodo(title); setTitle(''); }
  return (
    <div>
      <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={onClick}>추가</button>
    </div>
  )
}

export default TodoInput

