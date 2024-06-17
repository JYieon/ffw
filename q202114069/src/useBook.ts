import { useState, useEffect } from 'react'
import axios from 'axios';
import type { Book } from './types'

const emptyBook: Book = { id: 0, title: '', author: '', price: 0,
  categoryId: 0
}

function useBook(id: number) {
  const [book, setBook] = useState<Book>(emptyBook);
  const [errorMsg, setErrorMsg] = useState<string|null>(null);

  const onError = (error: any) => {
    const s = error instanceof Error ? error.message : error;
    setErrorMsg(String(s));
  };

  // id로 학생 조회
  const loadBook = async () => {
    try {
      // id 값으로 학생을 조회
      const response = await axios.get("/books/" + id);
      setBook(response.data);
    } catch (error) {
      onError(error);
    }
  }

  // 컴포넌트가 마운트 될 때, id 값으로 학생을 조회한다
  // 학생등록 /create URL인 경우에는 id 값이 주어지지 않고, 
  // 이때는 학생을 조회하지 않는다
  useEffect(() => { if (id) loadBook(); }, []);

  // 저장
  const saveBook = async () => {
    try {
      if (id > 0)
        await axios.put("/books/" + id, book); // 학생 수정화면인 때
      else
        await axios.post("/books/", book); // 학생 등록 화면일 때
    } catch (error) {
      onError(error);
    }
  }

  // 삭제
  const deleteBook = async () => {
    try {
        await axios.delete("/books/" + id);
    } catch (error) {
      onError(error);
    }
  }

  return {book, setBook, errorMsg, saveBook, deleteBook };
}

export default useBook;
