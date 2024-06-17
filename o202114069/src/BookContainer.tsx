import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Book, AddBookFunc, DeleteBookFunc } from './types'
import BookList from './BookList';
import BookInput from './BookInput';
import './BookContainer.css';

axios.defaults.baseURL = "http://localhost:3003";

function BookContainer() {
  const [bookList, setBookList] = useState<Book[]>([]);

  const reloadBook = async () => {
    const response = await axios.get("/books");
    const bookList: Book[] = response.data;
    setBookList(bookList);
  }

  const addBook : AddBookFunc = async (title: string, author: string) => {
    const book = {id: 0, title: title, author: author};
    await axios.post("/books", book);
    reloadBook();
  }

  const deleteBook : DeleteBookFunc = async (id: number) => {
    await axios.delete("/books/" + id);
    reloadBook();
  }

  useEffect(() => { reloadBook(); }, []);

  return (
    <div className="BookContainer">
      <h1>책</h1>
      <BookInput addBook={addBook} />
      <BookList bookList={bookList} deleteBook={deleteBook} />
    </div>
  );
}

export default BookContainer

