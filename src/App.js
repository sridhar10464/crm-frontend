import React from 'react';
import './App.css';
// import { Entry } from './page/entry/EntryPage';
import { DefaultLayout } from './Layout/DefaultLayout';
// import { Dashboard } from './page/dashboard/Dashboard';
// import { AddToken } from './page/new-token/AddToken';
import { TicketList } from './page/ticket-listing/TicketList';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddToken /> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
