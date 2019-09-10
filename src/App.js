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
      <Routes />
    </div>
  );
}

export default App;
