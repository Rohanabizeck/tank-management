import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import OsmMap from './pages/osm-map';
import Communication from './components/Communication';
import PortSettings from './components/PortSettings';
import CnrSettings from './components/CnrSettings';
import './index.css';

// TopToolbar Component
const TopToolbar = ({ onLogout }) => (
  <div className="top-toolbar">
    <div className="left-section">
      <div className="project-label">
        <div className="project-cell">Project - 1</div>
        <div className="cmd-cell">CMD</div>
      </div>
      <div className="command-buttons">
        {['ST1', 'TR1', 'ST2', 'TR2', 'OFC', 'HCRC', 'SDR'].map((btn) => (
          <button key={btn} className="cmd-btn">{btn}</button>
        ))}
      </div>
    </div>
    <div className="right-section">
      <button className="action-btn">Add/feed</button>
      <button className="action-btn">Media files</button>
      <button className="action-btn">Save</button>
      <button className="action-btn" onClick={onLogout}>Logout</button>
      <div className="icon-buttons">
        <button className="icon-btn">
          <i className="fas fa-bell"></i>
        </button>
        <button className="icon-btn">
          <i className="fas fa-cog"></i>
        </button>
      </div>
    </div>
  </div>
);

// Header Component
const Header = () => (
  <header className="header">
    <nav>
      <ul className="menu">
        {[
          { name: 'File', items: ['Open OSM Map', 'Save As', 'Print', 'Exit'] },
          { name: 'Configure', items: ['Communication', 'Port Settings', 'CNR Settings', 'Location Update', 'Interval', 'Allotslot Interface', 'External Source Settings', 'Internal Source Settings'] },
          { name: 'View', items: ['Zoom In', 'Zoom Out', 'Zoom to Extend', 'Pan', 'Fit All', 'Refresh', 'Default Map', 'Cursor', 'Hide/Show Legid', 'AD View', 'AB View', 'Unit View', 'Hide View'] },
          { name: 'Map Operations', items: ['Query', 'Analyze', 'Overlay', 'Military Symbols', 'Path Profile', 'Zone Creation', 'Geo Reference', 'Change Detection'] },
          { name: 'Order', items: [] },
          { name: 'Import', items: [] },
          { name: 'Export', items: [] },
          { name: 'Photos', items: [] },
          { name: 'Help', items: [] }
        ].map((menuItem) => (
          <li key={menuItem.name}>
            <span>{menuItem.name}</span>
            {menuItem.items.length > 0 && (
              <ul className="submenu">
                {menuItem.items.map((item) => (
                  <li key={item}><Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

// Sidebar Component
const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-item">Record Audio</div>
    <div className="sidebar-item">Chatbox</div>
  </div>
);

// MainContent Component
const MainContent = () => (
  <div className="main-content">
    <Switch>
      <Route path="/open-osm-map" component={OsmMap} />
      <Route path="/communication" component={Communication} />
      <Route path="/port-settings" component={PortSettings} />
      <Route path="/cnr-settings" component={CnrSettings} />
      <Route path="/">
        <div className="content-grid">
          <div className="input-box">
            <h3>Input 1</h3>
            <div className="input-content"></div>
          </div>
          <div className="input-box">
            <h3>Input 2</h3>
            <div className="input-content"></div>
          </div>
          <div className="input-box">
            <h3>Input 3</h3>
            <div className="input-content"></div>
          </div>
          <div className="input-box">
            <h3>Screen 1</h3>
            <div className="input-content"></div>
          </div>
          <div className="input-box">
            <h3>Input 4</h3>
            <div className="input-content"></div>
          </div>
        </div>
      </Route>
    </Switch>
  </div>
);

// Login Component
const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ role: '', userId: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', formData);
    onLogin();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          >
            <option value="">Select your role</option>
            <option value="admin">Admin</option>
            <option value="operator">Operator</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID/Tank ID</label>
          <input
            type="text"
            id="userId"
            value={formData.userId}
            onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
            placeholder="Enter your ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
    </div>
  );
};

// App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <div className="app">
        {isLoggedIn ? (
          <>
            <TopToolbar onLogout={handleLogout} />
            <Header />
            <div className="main-container">
              <Sidebar />
              <MainContent />
            </div>
          </>
        ) : (
          <Switch>
            <Route path="/login">
              <Login onLogin={handleLogin} />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

