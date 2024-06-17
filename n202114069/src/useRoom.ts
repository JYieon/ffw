import { useState, useEffect } from 'react'
import axios from 'axios';
import type { Room } from './types'

const emptyRoom: Room = { id: 0, roomName: '', capacity: 0, buildingId: 0,
  roomType: '', available: false
}

function useRoom(id: number) {
  const [room, setRoom] = useState<Room>(emptyRoom);
  const [errorMsg, setErrorMsg] = useState<string|null>(null);

  const onError = (error: any) => {
    const s = error instanceof Error ? error.message : error;
    setErrorMsg(String(s));
  };

  // id로 학생 조회
  const loadRoom = async () => {
    try {
      // id 값으로 학생을 조회
      const response = await axios.get("/rooms/" + id);
      setRoom(response.data);
    } catch (error) {
      onError(error);
    }
  }

  // 컴포넌트가 마운트 될 때, id 값으로 학생을 조회한다
  // 학생등록 /create URL인 경우에는 id 값이 주어지지 않고, 
  // 이때는 학생을 조회하지 않는다
  useEffect(() => { if (id) loadRoom(); }, []);

  // 저장
  const saveRoom = async () => {
    try {
      if (id > 0)
        await axios.put("/rooms/" + id, room); // 학생 수정화면인 때
      else
        await axios.post("/rooms/", room); // 학생 등록 화면일 때
    } catch (error) {
      onError(error);
    }
  }

  // 삭제
  const deleteRoom = async () => {
    try {
        await axios.delete("/rooms/" + id);
    } catch (error) {
      onError(error);
    }
  }

  return {room, setRoom, errorMsg, saveRoom, deleteRoom };
}

export default useRoom;
