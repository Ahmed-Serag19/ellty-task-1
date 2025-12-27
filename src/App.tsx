import React from 'react';
import './index.css';
import { PageSelector } from './components/PageSelector';
import type { PageData } from './components/PageSelector';

const dummyPages: PageData[] = [
  { id: '1', name: 'Page 1' },
  { id: '2', name: 'Page 2' },
  { id: '3', name: 'Page 3' },
  { id: '4', name: 'Page 4' },
];

function App() {
  const appContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#ffffff' 
  };

  return (
    <div style={appContainerStyle}>
      <PageSelector pages={dummyPages} />
    </div>
  );
}

export default App;
