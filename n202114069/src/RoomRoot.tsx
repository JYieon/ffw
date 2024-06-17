import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import RoomEdit from './RoomEdit';
import RoomList from './RoomList';

const Div = styled.div`
  border: 1px solid gray; width: 800px; margin: 10px auto;
  box-shadow: 5px 5px 5px #DDD; padding: 30px;
  & .error { margin-top: 20px; color: red; border: 1px solid #faa; padding: 10px 20px;
             border-radius: 10px; background-color: #fee; }
`;

function RoomRoot() {
  return (
    <Div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="/edit/:id" element={<RoomEdit />} />
          <Route path="/create/" element={<RoomEdit />} />
        </Routes>
      </BrowserRouter>
    </Div>
  )
}

export default RoomRoot;

