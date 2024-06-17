import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import useRoom from './useRoom';

const Div = styled.div`
  & > div { margin-bottom: 20px; }
  & input[type=text], input[type=number] {
    padding: 8px; width: 300px; font-size: 12pt; }
  & select { padding: 8px; width: 300px; font-size: 12pt; }
  & > div > label { margin-right: 20px; font-size: 12pt; }
  & button { padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; }
`;

function RoomEdit() {
  const params = useParams(); // /edit/3 URL에서 3 부분을 꺼내기 위한 객체
  const id: number = params.id ? parseInt(params.id) : 0; // URL에서 id 값을 꺼낸다

  const {room, setRoom, errorMsg, 
    saveRoom, deleteRoom } = useRoom(id);

  const navigate = useNavigate();

  // 저장 버튼 클릭
  const onSave = async () => {
    await saveRoom();
    if (!errorMsg) navigate('/'); // 목록 화면으로 나간다
  }

  // 삭제 버튼 클릭
  const onDelete = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteRoom();
      if (!errorMsg) navigate('/');
    }
  }

  // 취소 버튼 클릭
  const onCancel = () => navigate('/'); // 목록 화면으로 나간다

  // 입력 폼 이벤트 구현
  const onChange = (e: any) => {
      setRoom({ ...room, [e.target.name]: e.target.value });
  };

  return (
    <Div>
      <h1>강의실 { id ? '수정' : '등록' }</h1>
      <div>
        <input type="text" placeholder="강의실명" onChange={onChange}
               name="roomName" value={room.roomName} />
      </div>
      <div>
        <input type="number" placeholder="수용인원" onChange={onChange}
               name="capacity" value={room.capacity} />
      </div>
      <div>
      <label>
          <input type="radio" name="roomType" value="강의실"
                onChange={onChange} checked={room.roomType === "강의실"} />
          <span>강의실</span>
      </label>
      <label>
          <input type="radio" name="roomType" value="실습실"
                 onChange={onChange} checked={room.roomType === "실습실"} />
          <span>실습실</span>
      </label>
      </div>
      <div>
      <select value={room.buildingId} name="buildingId" onChange={onChange}>
          <option value={0}>강의실을 선택하세요</option>
          <option value={1}>정보과학관</option>
          <option value={2}>미가엘관</option>
          <option value={3}>새천년관</option>
        </select>

      </div>
      <div>
        <input type="checkbox" checked={room.available} 
            onChange={(e: any) => {
                setRoom({ ...room, [e.target.name]: e.target.checked })}}
               name="available" /> 대여가능
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

export default RoomEdit;
