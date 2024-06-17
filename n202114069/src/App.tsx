import RoomRoot from './RoomRoot';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3003";

function App() {
  return (
    <div>
      <RoomRoot />
    </div>
  )
}

export default App

