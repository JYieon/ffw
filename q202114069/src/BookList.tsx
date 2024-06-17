import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import BookItem from './BookItem'
import useBooks from './useBooks';

const Div = styled.div`
  & > button { padding: 0.2em 1.5em; font-size: 11pt;
    margin-bottom: 5px; float: right;
  }
  & table { border-collapse: collapse; width: 100%; }
  & thead { background-color: #eee; text-align: center; }
  & td { border: 1px solid gray; padding: 4px; }
  & td:nth-child(1) { text-align: center; width: 30px; }
  & tr:hover { background-color: #ffe; cursor: pointer; }
`;

function BookList() {
  const {books, errorMsg} = useBooks();

  // 학생 등록 버튼을 클릭할 때 "/create" URL로 이동하기 위한 navigate 함수 호출
  const navigate = useNavigate()
  const onCreate = () => navigate('/create');

  const trlist = books.map(book =>
    <BookItem key={book.id} book={book} />);

  return (
    <Div>
      <button type="button" onClick={onCreate}>등록</button>
      <table>
        <thead>
          <tr><td>id</td><td>제목</td><td>저자</td><td>가격</td><td>카테고리</td>
          </tr>
        </thead>
        <tbody>
          {trlist}
        </tbody>
      </table>
      { errorMsg && <div className="error">{errorMsg}</div> }
    </Div>
  )
}

export default BookList
