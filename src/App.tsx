import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Error from './Pages/Error';

import UserContext from './UserContext';

const App = () => {

  const [user, setUser] = useState(null)

  const value = useMemo(() => ([user, setUser]), [user, setUser])

  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>

        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path={"/about"} element={<About />} />

          <Route path={"*"} element={<Error />} />
        </Routes>
      </UserContext.Provider>

    </BrowserRouter>
  );
};

export default App;