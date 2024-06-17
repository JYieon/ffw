import Counter from './Counter';
import styled from 'styled-components'

const Div = styled.div`
  width: 300px; padding: 30px; margin: 30px auto;
  box-shadow: 2px 2px 6px rgba(0.0,0,0,0.4);
  font-size: 11pt;
`;

function App() {
  return (
    <Div>
      <Counter />
      <Counter />
    </Div>
  )
}

export default App
