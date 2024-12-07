import React, { useState } from 'react';
import LoginPage from './LoginPage';
import MapPage from './pages/MapPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App font-sans antialiased text-gray-900 bg-gray-100">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <MapPage />
      )}
    </div>
  );
}

export default App;

