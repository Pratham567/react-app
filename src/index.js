import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropsDrillApp from './propsdrill/PropsDrillApp';
import ContextApp from './contextapp/ContextApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App />
  //   <BlogListApp />
  //   <AppRouter /> */}
  //   {/* <BlogsApp /> */}
  // </React.StrictMode>
    // <BlogsApp />
    <PropsDrillApp />
    // <ContextApp />
);
