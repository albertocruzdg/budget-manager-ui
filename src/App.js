import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import AssetNew from './pages/Assets/AssetNew';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <AssetNew />
    </div>
  );
}

export default App;
