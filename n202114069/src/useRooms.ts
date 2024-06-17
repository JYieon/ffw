import { useState, useEffect } from 'react'
import axios from 'axios';
import type { Room } from './types'

function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [errorMsg, setErrorMsg] = useState<string|null>(null);

  // 백엔드에서 학생 목록을 조회
  const loadRooms = async () => {
    try {
      const response = await axios.get("rooms");
      setRooms(response.data);
    } catch (error) {
      const s = error instanceof Error ? error.message : error;
      setErrorMsg(String(s));
    }
  };

  // 마운트될 때 즉 컴포넌트 화면에 처음 보이게 될 때,
  // loadStudents 함수를 호출한다.
  useEffect(() => { loadRooms(); }, []);
 
  return {rooms, errorMsg };
}

export default useRooms;
