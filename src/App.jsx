import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import Body from './body/body';
import Developedby from './body/developedby';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Body />
            </div>
          }
        />
        <Route path="/developedby" element={<Developedby />} />
      </Routes>
    </Router>
  );
};

export default App;
