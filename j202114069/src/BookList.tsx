import React from 'react'
import type { Book, DeleteBookFunc } from '../types'

type Props = {
  bookList: Book[]
  deleteBook: DeleteBookFunc
}

function BookList({ bookList, deleteBook }: Props) {
  const confirmDelete = (book: Book) => {
    if (window.confirm('삭제하시겠습니까?'))
        deleteBook(book.id)
  };

  const trList = bookList.map(book => (
    <tr key={book.id} className = { book.price >= 10000 ? 'yellow' : 'green' }>
      <td>{ book.id }</td>
      <td>{ book.title }</td>
      <td>{ book.price }</td>
      <td>
        <button onClick={e => confirmDelete(book)}>x</button>
      </td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr><td>id</td><td>제목</td><td>가격</td><td></td></tr>
      </thead>
      <tbody>
        {trList}
      </tbody>
    </table>
  )
}

export default BookList
