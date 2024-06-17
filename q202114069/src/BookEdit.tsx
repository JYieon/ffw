import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import useBook from './useBook';

const Div = styled.div`
  & > div { margin-bottom: 20px; }
  & input[type=text], input[type=email], input[type=tel] {
    padding: 8px; width: 300px; font-size: 12pt; }
  & select { padding: 8px; width: 300px; font-size: 12pt; }
  & > div > label { margin-right: 20px; font-size: 12pt; }
  & button { padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; }
`;

function BookEdit() {
  const params = useParams(); // /edit/3 URL에서 3 부분을 꺼내기 위한 객체
  const id: number = params.id ? parseInt(params.id) : 0; // URL에서 id 값을 꺼낸다

  const {book, setBook, errorMsg, 
    saveBook, deleteBook } = useBook(id);

  const navigate = useNavigate();

  // 저장 버튼 클릭
  const onSave = async () => {
    await saveBook();
    if (!errorMsg) navigate('/'); // 목록 화면으로 나간다
  }

  // 삭제 버튼 클릭
  const onDelete = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteBook();
      if (!errorMsg) navigate('/');
    }
  }

  // 취소 버튼 클릭
  const onCancel = () => navigate('/'); // 목록 화면으로 나간다

  // 입력 폼 이벤트 구현
  const onChange = (e: any) => {
      setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <Div>
      <h1>책 { id ? '수정' : '등록' }</h1>
      <div>
        <input type="text" placeholder="제목" onChange={onChange}
               name="title" value={book.title} />
      </div>
      <div>
        <input type="text" placeholder="저자" onChange={onChange}
               name="author" value={book.author} />
      </div>
      <div>
        <input type="number" placeholder="가격" onChange={onChange}
               name="price" value={book.price} />
      </div>
      <div>
        <input type="number" placeholder="카테고리" onChange={onChange}
               name="categoryId" value={book.categoryId} />
      </div>
      <div>
        <button type="button" onClick={onSave}>저장</button>
        { (id > 0) && <button type="button" onClick={onDelete}>삭제</button> }
        <button type="button" onClick={onCancel}>취소</button>
      </div>
      { errorMsg && <div className="error">{errorMsg}</div> }
    </Div>
  )
}

export default BookEdit;
