import React from 'react';
import Routes from './Routes.js'
import { Button } from 'antd';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/about">
          <Button type="primary">About</Button>
      </Link>
      <Link to="/">
          <Button type="primary">List</Button>
      </Link>
      <Link to="/context">
          <Button type="primary">Context</Button>
      </Link>
      <Link to="/prop">
          <Button type="primary">Prop</Button>
      </Link>
      <Routes />
    </div>
  );
}

export default App;
