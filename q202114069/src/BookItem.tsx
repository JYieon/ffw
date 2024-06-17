import React from 'react'
import type { Book } from './types'
import { useNavigate } from 'react-router-dom'

type Props = {
  book: Book
}

function BookItem({ book }: Props) {
  const navigate = useNavigate();
  const onClick = () => navigate('/edit/' + book.id);
  return (
    <tr onClick={onClick}>
      <td>{ book.id }</td>
      <td>{ book.title }</td>
      <td>{ book.author }</td>
      <td>{ book.price }</td>
      <td>{ book.categoryId }</td>
    </tr>
  )
}

export default BookItem;
