import BookRoot from './BookRoot';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3003";

function App() {
  return (
    <div>
      <BookRoot />
    </div>
  )
}

export default App

