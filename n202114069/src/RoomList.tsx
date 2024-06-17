import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import RoomItem from './RoomItem'
import useRooms from './useRooms';
import type { Room } from './types'

const Div = styled.div`
  & > button { padding: 0.2em 1.5em; font-size: 11pt;
    margin-bottom: 5px; float: right;
  }
  & table { border-collapse: collapse; width: 100%; }
  & thead { background-color: #eee; text-align: center; }
  & td { border: 1px solid gray; padding: 4px; }
  & td:nth-child(1) { text-align: center; width: 30px; }
  & td:nth-child(5) { text-align: center; width: 100px; }
  & td:nth-child(6) { text-align: center; width: 100px; }
  & tr:hover { background-color: #ffe; cursor: pointer; }
  & tr.yellow { background-color: #fffec3; }
  & tr.green { background-color: #cdffd5;  }
`;

function RoomList() {
  const {rooms, errorMsg} = useRooms();

  // 학생 등록 버튼을 클릭할 때 "/create" URL로 이동하기 위한 navigate 함수 호출
  const navigate = useNavigate()
  const onCreate = () => navigate('/create');
  

  const trlist = rooms.map(room =>
    <RoomItem key={room.id} room={room} className={room.available ? 'green': 'yellow'}/>);

  return (
    <Div>
      <button type="button" onClick={onCreate}>등록</button>
      <table>
        <thead>
          <tr>
          <td>id</td><td>강의실명</td><td>유형</td><td>건물</td>
          <td>수용인원</td><td>대여가능</td>
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

export default RoomList
