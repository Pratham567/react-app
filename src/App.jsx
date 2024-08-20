import Navbar from './Navbar';
import Footer from './Footer';
import Blog from './Blog';
import Events from './Events';
import StateHook from './StateHook';
import UseEffectHook from './UseEffectHook';
import BlogsDB from './BlogsDB';

import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Blog /> */}
      {/* <Events/> */}
      {/* <StateHook /> */}


      <Footer />
    </div>
  );
}

export default App;
