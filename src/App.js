import React from 'react';
import './App.css';
// import { Entry } from './page/entry/EntryPage';
import { DefaultLayout } from './Layout/DefaultLayout';
// import { Dashboard } from './page/dashboard/Dashboard';
import { AddToken } from './page/new-token/AddToken';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddToken />
      </DefaultLayout>
    </div>
  );
}

export default App;
