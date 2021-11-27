import React, { useState } from 'react'
 import {Link} from 'react-router-dom'  
import Form from './Form';
const Sidebar = () => {
    const [showForm,setShowForm]=useState(false)
    return (
        <>
        <div className="backdrop" style={{display: !showForm?'block':"none"}}></div>
         <div className='side-nav' style={{ boxShadow: showForm?"3px 3px 5px  rgb(190, 188, 188)":"none"}} > 
         <div className='card1' >
         <div className='card1-img'> <img src='/girll.jpg  ' alt='lal'></img> </div>
          <div className='details' >
            <h6>Hi  Reader,</h6>  
            <p>Here's your Name !</p> 
          </div> 
         </div> 
         <div className={`card2 ${ !showForm?"hide":''}`}>
             <h5>View Toggle </h5> 
             <div className='toggle'> 
             <div className= 'h-view'>
                <Link to ='/Hlayout'><i class="fab fa-elementor fa-2x"></i></Link>
             </div> 
             <div className= 'v-view'>
              <Link to ='/Vlayout'> <i class="fas fa-grip-vertical fa-2x"></i></Link>
             </div></div> 
         </div>
        <div className='card3 '>
            <h5> Have a Feedback?</h5>    
            <button onClick={()=>setShowForm(false)}>We're Listening!</button>
        </div> 

        </div>  
        <Form showForm={showForm} setShowForm= {setShowForm} />
        </>

     
    );}
 
export default Sidebar;
 