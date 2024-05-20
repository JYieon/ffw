import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import useStudent from './useStudent';

const Div = styled.div`
  & > div { margin-bottom: 20px; }
  & input[type=text], input[type=email], input[type=tel] {
    padding: 8px; width: 300px; font-size: 12pt; }
  & select { padding: 8px; width: 300px; font-size: 12pt; }
  & > div > label { margin-right: 20px; font-size: 12pt; }
  & button { padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; }
`;

function StudentEdit() {
  const params = useParams(); // /edit/3 URL에서 3 부분을 꺼내기 위한 객체
  const id: number = params.id ? parseInt(params.id) : 0; // URL에서 id 값을 꺼낸다

  const {student, setStudent, errorMsg, 
    saveStudent, deleteStudent } = useStudent(id);

  const navigate = useNavigate();

  // 저장 버튼 클릭
  const onSave = async () => {
    await saveStudent();
    if (!errorMsg) navigate('/'); // 목록 화면으로 나간다
  }

  // 삭제 버튼 클릭
  const onDelete = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteStudent();
      if (!errorMsg) navigate('/');
    }
  }

  // 취소 버튼 클릭
  const onCancel = () => navigate('/'); // 목록 화면으로 나간다

  // 입력 폼 이벤트 구현
  const onChange = (e: any) => {
      setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <Div>
      <h1>학생 { id ? '수정' : '등록' }</h1>
      <div>
        <input type="text" placeholder="학번" onChange={onChange}
               name="studentNo" value={student.studentNo} />
      </div>
      <div>
        <input type="text" placeholder="이름" onChange={onChange}
               name="name" value={student.name} />
      </div>
      <div>
        <input type="email" placeholder="이메일" onChange={onChange}
               name="email" value={student.email} />
      </div>
      <div>
        <input type="tel" placeholder="전화번호" onChange={onChange}
               name="phone" value={student.phone} />
      </div>
      <div>
        <label>
          <input type="radio" name="sex" value="남"
                onChange={onChange} checked={student.sex === "남"} />
          <span>남자</span>
        </label>
        <label>
          <input type="radio" name="sex" value="여"
                 onChange={onChange} checked={student.sex === "여"} />
          <span>여자</span>
        </label>
      </div>
      <div>
        <select value={student.departmentId} name="departmentId" onChange={onChange}>
          <option value={0}>학과를 선택하세요</option>
          <option value={1}>소프</option>
          <option value={2}>컴공</option>
          <option value={3}>정통</option>
          <option value={4}>인공지능</option>
        </select>
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

export default StudentEdit;
