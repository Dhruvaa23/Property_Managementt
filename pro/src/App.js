import logo from './logo.svg';
import './App.css';

import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './component/header';
import Main from './component/main';
import Signup from './component/signup';
import Signin from './component/signin';
import Add from './component/add';
import List from './component/list';
import Service from './component/service';
import Table from './component/table';
import Footer from './component/footer';
import About from './component/about';


function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/signin' element={<Signin />} />
            <Route exact path='/add' element={<Add />} />
            <Route exact path='/list' element={<List />} />
            <Route exact path='/service' element={<Service />} />
            <Route exact path='/table' element={<Table />} />
            <Route exact path='/about' element={<About />} />


          </Routes>
          <Footer />
      </Router>
    </>
    
  );
}

export default App;
