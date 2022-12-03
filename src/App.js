import './App.css'
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login.jsx';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <div className="text-center text-2xl bg-[#EEF0F2]">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
