import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppMovies from './components/AppMovies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />}></Route>
      <Route path="/movies" element={<AppMovies />}></Route>
    </Routes>

  );
}

export default App;
