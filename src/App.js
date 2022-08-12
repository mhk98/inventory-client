import './App.css';
import Home from './Pages/Home';
import { Routes, Route} from "react-router-dom";
import SubCom from './Pages/SubCom';
import SubElect from './Pages/SubElect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SCom from './Pages/SCom';
import Keyboard from './Pages/Keyboard';
import Processor from './Pages/Processor';
import Television from './Pages/Television';
import Refrigerator from './Pages/Refrigerator';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
    <Route path='/subcom' element={<SubCom></SubCom>}></Route>
    <Route path='/subelect' element={<SubElect></SubElect>}></Route>
    <Route path='/scom' element={<SCom></SCom>}></Route>
    <Route path='/keyboard' element={<Keyboard></Keyboard>}></Route>
    <Route path='/processor' element={<Processor></Processor>}></Route>
    <Route path='/television' element={<Television></Television>}></Route>
    <Route path='/refrigerator' element={<Refrigerator></Refrigerator>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
