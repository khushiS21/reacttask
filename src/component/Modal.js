const Modal = ({setShowModal}) => {
    return ( 
        <> 
        <div class="modal-div">
         <div className='modal-body '>
        <div className='m-header'>
        <i class="fas fa-times-circle fa-lg "  onClick={()=>setShowModal(false)} ></i> 
        <img src='/skyyyy.jpg'  alt='skyyyy' /> 
            <div className='iconss'>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-youtube-square"></i>
            
            <i class="fab fa-snapchat-square"></i>
            </div>
            <div className='modal-nav'>
              <p> About First</p>  
              <p>Memebership</p>
              <p> Initiatives</p>
              <p>Standards Publications</p>
              <p>Events</p> 
              <p>Education</p> 
              <button>Sign In </button> 
            </div>
        </div>  
          <div className='m-body'>
        <div className='modal-left' > 
        <h6>FIRST Blog</h6> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus enim, sodales a volutpat in, convallis ac lorem. Nulla facilisi. Cras in mauris eget odio scelerisque convallis. Integer consectetur orci id turpis luctus molestie. Maecenas at suscipit dolor. Nulla facilisi. Vestibulum .

         <p>Donec maximus tincidunt magna, ut congue odio elementum eu. Etiam placerat vehicula suscipit. Proin suscipit
Proin lobortis ultricies impe</p> a libero a aliquam. Duis quis ligula varius, imperdiet diam in, suscipit nulla. Phasellus dictum dapibus ornare. Donec quis diam tristique, interdum mi vitae, dictum purus. Quisque in a</p>
            </div>   
            <div className='modal-right' >
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sapien laoreet magna imperdiet, nec porta orci luctus. Aliquam urna</h4>  
                <p style={{fontStyle:'italic'}} >lis dictum luctus. Suspendisse vel sodales odio, at euismod nisl. Sed cursus felis ante, et fin</p>
                <p> by arthur linc. outreach lead, team a< br ></br> <span  style={{fontStyle:'italic'}} >Monday, january 23th, 2020  </span  >
                    </p>  
                <p> orbi lacinia, orci ac finibus maximus, augue diam ultricies ligula, sit amet vehicula purus mi tincidunt sapien. Aliquam et finibus neque. Ut malesuada mi sed sapien pharetra fringilla. Ut accumsan semper maximus. Vivamus semper orci ante, vitae dictum enim pulvinar et. Aliquam erat volutpat. Aenean a mollis nibh. Maecenas at ligula non erat dapibus hendrerit. Integer placerat, mi vitae dictum auctor, neque augue vehicula dui, non egestas arcu urna sed libero. Pellentesque eu pulvinar mi. Aenean vel pretium tortor. Donec non nulla elementum lacus efficitur egestas eget eu magna. Fusce eleifend temp
                    </p> 
               <p> Nunc iaculis dictum luctus. Suspendisse vel sodales odio, at euismod nisl. Sed cursus felis ante, et finibus erat elementum non. Integer mattis venenatis augue nec aliquam. Nunc dictum ultrices lectus, et accumsan ante dapibus id. Suspendisse vulputate diam sapien, vitae dapibus sapien interdum vel. Proin at metus metus. Aenean sapien magna, sagittis eu elementum vel, sodales in est. In risus nibh, pulvinar ac justo at, lobortis hendrerit nunc. Cras vulputate diam non tempus ultricie</p>
                    
                <p> urna nisi, dictum ut pulvinar et, accumsan ut nunc. Phasellus non faucibus nibh, vel sagittis lorem. Nullam felis quam, maximus eu nisl eget, vestibulum rhoncus tellus. Vestibulum vitae volutpat ante, a euismod elit. Nunc tristique tellus ut lacus consequat, id pellentesque dui elementum. Cras molestie lorem at mi eleifend varius. Nunc ligula magna, egestas vitae libero vel, blandit imperdiet mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mattis lacus. Suspendisse dolor mi, scelerisque ac erat vel, feugiat gravida ex. Phasellus aliquam dapibus velit. </p>  
                <p> u unc. Phasellus non faucibus nibh, vel sagittis lorem. Nullam felis quam, maximus eu nisl eget, vestibulum rhoncus tellus. Vestibulum vitae volutpat ante, a euismod elit. Nunc tristique tellus ut lacus consequat, id pellentesque dui elementum. Cras molestie lorem at mi eleifend varius. Nunc ligula magna, egestas vitae libero vel, blandit imperdiet mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mattis lacus. Suspendisse dolor mi, scelerisque ac erat vel, feugiat gravida ex. Phasellus aliquam dapibus velit. </p> 
                 </div>   </div> 
                  
                   </div> </div>
         </>   
            
        
     );
}
 
export default Modal;