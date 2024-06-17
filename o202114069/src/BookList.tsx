import React from 'react'
import type { Book, DeleteBookFunc } from './types'

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
    <tr key={book.id} >
      <td>{ book.id }</td>
      <td>
        { book.title }
        <span onClick={e => confirmDelete(book)}>x</span>
      </td>
      <td>{ book.author }</td>
    </tr>
  ));


  return (
    <table>
      <thead>
        <tr><td>id</td><td>제목</td><td>저자</td></tr>
      </thead>
      <tbody>
        {trList}
      </tbody>
    </table>
  )
}

export default BookList
