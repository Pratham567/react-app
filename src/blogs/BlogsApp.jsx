import BlogsNav from './BlogsNav';
import Footer from '../Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllBlogs from './AllBlogs';
import About from './About';
import Cleanup from './Cleanup';

function BlogsApp() {

  return (
    <div className="App">
      <Router>
        <BlogsNav />
        <Routes>
          <Route path="/" element={<section> <p>This is the home page</p> </section>} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/cleanup" element={<Cleanup />} />
          <Route path="/contact" element={<section><p>This is a contact page</p></section>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default BlogsApp;
