import Navbar from './Navbar';
import Footer from './Footer';
import Blog from './Blog';
import Events from './Events';
import StateHook from './StateHook';

function App() {
  const title = 'This is a title';
  const array = [1, 2, 3, 4, 5];
  const linkedInUrl = "http://www.linkedin.com";
  return (
    <div className="App">
      <Navbar />
      <Blog />
      {/* <Events/> */}
      <StateHook />
      <Footer/>
    </div>
  );
}

export default App;
