import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/App.css';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Ticket from './pages/Ticket';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/ticket/:id" element={<Ticket editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
