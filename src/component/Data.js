
 
 const Data = ({item,setShowModal}) => {
   
    return(
    <section className='horizontal-view'>
        {item.map((user) =>{
        const {id,title,body}=user;
        return  <article  className=' display-slip'key= {id}> 
        <div className='single-slip' > 
        <div className='slip-img'><img src='/persnn.jpg' alt='imgg' /></div>
        <div className='text '>  
        <h6 className='title' onClick={()=>setShowModal(true)} >{title}</h6> 
        <p className='body' > {body}</p>  
        <p  className='date' style={{color:'grey'}}>Mon, 21 Dec 2020 14.56 GMT</p>
        </div>
           </div >
        <div className='cross'>
        <i class="fas fa-times-circle fa-lg "></i> 
        </div> 
      
        </article>
          })}
      </section>
     ) ;
}
 
export default Data;