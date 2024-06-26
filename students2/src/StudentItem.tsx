import React from 'react'
import type { Student } from './types'
import { useNavigate } from 'react-router-dom'

type Props = {
  student: Student
}

function StudentItem({ student }: Props) {
  const navigate = useNavigate();
  const onClick = () => navigate('/edit/' + student.id);
  return (
    <tr onClick={onClick}>
      <td>{ student.id }</td>
      <td>{ student.studentNo }</td>
      <td>{ student.name }</td>
      <td>{ student.email }</td>
      <td>{ student.phone }</td>
      <td>{ student.sex }</td>
      <td>{ student.departmentId }</td>
    </tr>
  )
}

export default StudentItem;
