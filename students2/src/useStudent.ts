import { useState, useEffect } from 'react'
import axios from 'axios';
import type { Student } from './types'

const emptyStudent: Student = { id: 0, studentNo: '', name: '', email: '',
  phone: '', sex: '', departmentId: 0
}

function useStudent(id: number) {
  const [student, setStudent] = useState<Student>(emptyStudent);
  const [errorMsg, setErrorMsg] = useState<string|null>(null);

  const onError = (error: any) => {
    const s = error instanceof Error ? error.message : error;
    setErrorMsg(String(s));
  };

  // id로 학생 조회
  const loadStudent = async () => {
    try {
      // id 값으로 학생을 조회
      const response = await axios.get("/students/" + id);
      setStudent(response.data);
    } catch (error) {
      onError(error);
    }
  }

  // 컴포넌트가 마운트 될 때, id 값으로 학생을 조회한다
  // 학생등록 /create URL인 경우에는 id 값이 주어지지 않고, 
  // 이때는 학생을 조회하지 않는다
  useEffect(() => { if (id) loadStudent(); }, []);

  // 저장
  const saveStudent = async () => {
    try {
      if (id > 0)
        await axios.put("/students/" + id, student); // 학생 수정화면인 때
      else
        await axios.post("/students/", student); // 학생 등록 화면일 때
    } catch (error) {
      onError(error);
    }
  }

  // 삭제
  const deleteStudent = async () => {
    try {
        await axios.delete("/students/" + id);
    } catch (error) {
      onError(error);
    }
  }

  return {student, setStudent, errorMsg, saveStudent, deleteStudent };
}

export default useStudent;
