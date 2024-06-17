import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import { counterState } from './counterState';

const Div = styled.div`
 & span { display: inline-block; padding: 10px 30px; font-size: 12pt; }
 & button { padding: 0.3em 1.5em }
`

function Counter() {
  const [count, setCount] = useRecoilState<number>(counterState);
  const onClick = () => setCount(count + 1);
  return (
    <Div>
      <span>{ count }</span>
      <button type="button" onClick={onClick}>++</button>
    </Div>
  )
}

export default Counter
