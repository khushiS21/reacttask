import './App.css';
import Sidebar from './component/Sidebar';
import Hlayout from './component/Hlayout' ;  
import Modal from './component/Modal' ; 
import Form from './component/Form' 
import Vlayout from './component/Vlayout' ;
import { BrowserRouter as Router ,Route , Routes}from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [showModal,setShowModal]=useState(false);
  
  return (
    <>
    <div className="App">
     <Router>
     <Sidebar/>
     <Routes>
       <Route path='/Hlayout'  element={<Hlayout setShowModal={setShowModal}/>} />
       <Route path='/Vlayout' element={<Vlayout setShowModal={setShowModal}/>} />
    </Routes>
    </Router> 
    </div> 
    <div className={`componets ${showModal?"show-modal":""}`}> 
    <Modal setShowModal={setShowModal}/>
    </div>
    </>
  );
}
export default App;
