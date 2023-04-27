import logo from './logo.svg';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NewPage from './pages/Newpage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/new" element={<NewPage />}/>
      </Routes>
    </>
  );
}

export default App;
