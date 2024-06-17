import React, { useState } from 'react'
import type { AddBookFunc } from '../types'

type Props = {
  addBook : AddBookFunc
}

function BookInput({ addBook }: Props) {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const onClick = () => { addBook(title, price); setTitle(''); setPrice(0) }
  return (
    <div>
      <input type='text' placeholder="제목을 입력하세요" value={title} onChange={e => setTitle(e.target.value)} />
      <input type='number' value={price} onChange={e => setPrice(parseInt(e.target.value))} />
      <button onClick={onClick}>추가</button>
    </div>
  )
}

export default BookInput
