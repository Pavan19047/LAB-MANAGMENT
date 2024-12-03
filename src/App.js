import { ToastContainer } from 'react-toastify';
import './App.css';
import Admin from './components/Admin';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Student />
    </div>
  );
}

export default App;
