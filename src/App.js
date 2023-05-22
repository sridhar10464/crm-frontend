import React from 'react';
import './App.css';
import { Entry } from './page/entry/EntryPage';
import { DefaultLayout } from './Layout/DefaultLayout';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        Dashboard
      </DefaultLayout>
    </div>
  );
}

export default App;
