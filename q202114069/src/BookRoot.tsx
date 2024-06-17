import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import BookEdit from './BookEdit';
import BookList from './BookList';

const Div = styled.div`
  border: 1px solid gray; width: 800px; margin: 10px auto;
  box-shadow: 5px 5px 5px #DDD; padding: 30px;
  & .error { margin-top: 20px; color: red; border: 1px solid #faa; padding: 10px 20px;
             border-radius: 10px; background-color: #fee; }
`;

function BookRoot() {
  return (
    <Div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/edit/:id" element={<BookEdit />} />
          <Route path="/create/" element={<BookEdit />} />
        </Routes>
      </BrowserRouter>
    </Div>
  )
}

export default BookRoot;

