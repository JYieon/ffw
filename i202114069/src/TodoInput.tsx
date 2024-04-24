import React, { useState } from 'react'
import type { AddTodoFunc } from './types'

type Props = {
  addTodo : AddTodoFunc
}

function TodoInput({ addTodo }: Props) {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const onClick = () => { addTodo(title, price); setTitle(''); setPrice(0); }
  return (
    <div>
      <input type='text' value={title} onChange={e => setTitle(e.target.value)} />
      <input type='number' value={price} onChange={e => setPrice(parseInt(e.target.value))} />
      <button onClick={onClick}>추가</button>
    </div>
  )
}

export default TodoInput

