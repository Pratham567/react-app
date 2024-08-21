import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes/AppRouter';

import BlogListApp from './bloglist/BlogListApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    // <BlogListApp />
    <AppRouter />
  // </React.StrictMode>
);
