import StudentRoot from './StudentRoot';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3003";

function App() {
  return (
    <div>
      <StudentRoot />
    </div>
  )
}

export default App

