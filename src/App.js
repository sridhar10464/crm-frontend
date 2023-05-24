import React from 'react';
import './App.css';
import { Entry } from './page/entry/EntryPage';
import { DefaultLayout } from './Layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard';
import { AddToken } from './page/new-token/AddToken';
import { TicketList } from './page/ticket-listing/TicketList';
import { Ticket } from './page/ticket/Ticket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/private-Route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Entry />} />
        
        <Route
          path="/dashboard" 
          element={
          // <PrivateRoute>
          <DefaultLayout>
          <Dashboard />
          </DefaultLayout>
          // </PrivateRoute>
        } />
        <Route 
          path="/add-token" 
          element={
          // <PrivateRoute>
          <DefaultLayout>
          <AddToken />
          </DefaultLayout>
          // </PrivateRoute>
        } />
        <Route 
          path="/token-list" 
          element={
          // <PrivateRoute>
          <DefaultLayout>
          <TicketList />
          </DefaultLayout>
          // </PrivateRoute>
        } />
        <Route 
          path="/token/:tId" 
          element={
          // <PrivateRoute>
          <DefaultLayout>
          <Ticket />
          </DefaultLayout>
          // </PrivateRoute>
        } />
        {/* <Route path="/add-token" element={<AddToken />} />
        <Route path="/ticket-list" element={<TicketList />} />
        <Route path="/ticket/:tid" element={<Ticket />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
