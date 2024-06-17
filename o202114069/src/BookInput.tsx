import React, { useState } from 'react'
import type { AddBookFunc } from './types'

type Props = {
  addBook : AddBookFunc
}

function BookInput({ addBook }: Props) {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const onClick = () => { addBook(title, author); setTitle(''); }
  return (
    <div>
      <input type='text' placeholder='제목을 입력하세요' value={title} onChange={e => setTitle(e.target.value) } />
      <input type='text' placeholder='저자를 입력하세요' value={author} onChange={e => setAuthor(e.target.value)} />
      <button onClick={onClick}>추가</button>
    </div>
  )
}

export default BookInput
