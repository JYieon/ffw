import { useState, useEffect } from 'react'
import axios from 'axios';
import type { Book } from './types'

function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [errorMsg, setErrorMsg] = useState<string|null>(null);

  // 백엔드에서 학생 목록을 조회
  const loadBooks = async () => {
    try {
      const response = await axios.get("books");
      setBooks(response.data);
    } catch (error) {
      const s = error instanceof Error ? error.message : error;
      setErrorMsg(String(s));
    }
  };

  // 마운트될 때 즉 컴포넌트 화면에 처음 보이게 될 때,
  // loadStudents 함수를 호출한다.
  useEffect(() => { loadBooks(); }, []);
 
  return {books, errorMsg };
}

export default useBooks;
