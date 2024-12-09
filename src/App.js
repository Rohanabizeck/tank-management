import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return <div className="text-2xl text-blue-500">Welcome to the Home Page</div>;
}

function About() {
  return <div className="text-2xl text-green-500">About Us</div>;
}

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <Link className="mr-4" to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="p-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
