import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Timeline from "./Pages/Timeline";
import Home from "./Pages/Home";
import Navbar from "./Component/Global/Navbar";
import Event from "./Pages/Event";
import Footer from './Component/Global/Footer';

function App() {
  return (
     <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/Events' element={<Event></Event>}></Route>
        <Route exact path='/Timeline' element={<Timeline></Timeline>}></Route>
      </Routes>
      <Footer></Footer>
     </Router>
  );
}

export default App;
