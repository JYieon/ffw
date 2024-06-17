
import React, {useState} from 'react'
import type { Room } from './types'
import { useNavigate } from 'react-router-dom'

type Props = {
  room: Room
  className: string;
}

function RoomItem({ room, className }: Props) {
  const navigate = useNavigate();
  const onClick = () => navigate('/edit/' + room.id);


  return (
    <tr onClick={onClick} className={className}>
      <td>{ room.id }</td>
      <td>{ room.roomName }</td>
      <td>{ room.roomType }</td>
      <td>{ room.buildingId }</td>
      <td>{ room.capacity }</td>
      <td>{ room.available ? "O" : "X"}</td>
    </tr>
  )
}

export default RoomItem;
