import React from 'react';

import Layout from "./container/layout";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>Hit The Circle</h3>
          </div>
          <div className="col-md-12">
            <Layout />
          </div>
        </div>
    </div>
  );
}

export default App;
