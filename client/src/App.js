import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/App.css';

import { getUser } from './services/users';
import { TicketsContext, ContextValue } from './context';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Ticket from './pages/Ticket';

function App() {
  const [userId, setUserId] = useState('');
  const value = ContextValue();

  useEffect(() => 
    {
      getUser(setUserId);
    }, []);

  return (
    <div className="app">
      <TicketsContext.Provider value={value}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tickets" element={<Ticket editMode={false} />} />
            <Route path="/tickets/:id" element={<Ticket editMode={true} />} />
          </Routes>
        </BrowserRouter>
      </TicketsContext.Provider>
    </div>
  );
}

export default App;
