import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Home from './Home'
import About from './About'
import Notice from './Notice'
import Footer from './Footer'

const Div = styled.div`
  margin: 20px;
`;

function App() {
  return (
    <BrowserRouter>
      <Div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/notice" element={<Notice/>} />
        </Routes>
        <Footer />
      </Div>
    </BrowserRouter>
  )
}

export default App

