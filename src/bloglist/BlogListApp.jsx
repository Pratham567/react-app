import Navbar from '../Navbar';
import Footer from '../Footer';
import BlogListDb from './BlogListDb';

import { useState, useEffect } from 'react';

function BlogListApp() {

  const [blogs, setBlogs] = useState([
    { title: "Blog Title from component", content: "This is blog component...", author: "Kube Dude", id: 1 }
  ]);

  // 1. Initialize the blogs state with null, as data to come from DB
  // 2. Fetch data from API using useEffect
  // 3. Set the blogs state with the fetched data
  // 4. Add setTimeout to simulate the delay in fetching data
  // 5. Add loading state to show loading message while fetching data
  // 6. Error Handling: Add error state to show error message if data fetching fails
  // 7. Error Handling: Handle 404 errors
  // HW: 8. Add a button to fetch data from API

  return (
    <div className="App">
      <Navbar />
      <section>
        This is a section for BlogListApp.
      </section>
      {<BlogListDb blogs={blogs} title={"All blogs from API"} />}

      <Footer />
    </div>
  );
}

export default BlogListApp;

















/*

useState(() => {
    setTimeout(() => {
      fetch(endPoint)
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          setBlogs(data);
          setLoading(false);
        });
    }, 1000);
  }, []);

*/