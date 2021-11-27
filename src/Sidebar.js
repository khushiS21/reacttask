import React from 'react'
 import {Link} from 'react-router-dom'  
const Sidebar = () => {
    return (
        <>
         <div className='side-nav' > 
         <div className='card1' >
          <img src='/lala.jpg  ' alt='lal'></img> 
          <div className='details' >
            <h6>Hi  Reader,</h6>  
            <p>Here's your Name !</p> 
          </div> 
         </div> 
         <div className='card2'>
             <h5>View Toggle </h5> 
             <div className='toggle'> 
             <div className= 'h-view'>
                <Link to ='/Hlayout'><i class="fab fa-elementor"></i></Link>
             </div> 
             <div className= 'v-view'>
              <Link to ='/Vlayout'><i class="fas fa-grip-vertical"></i></Link>
             </div></div> 
         </div>
        <div className='card3 '>
            <h5> Have a Feedback?</h5>    
            <button>We're Listening!</button>
        </div>
        </div>
        </>

     
    );}
 
export default Sidebar;
 