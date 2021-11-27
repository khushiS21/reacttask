
const Record = ({rec,setShowModal}) => {
     return(
        <section>
        {rec.map((person) =>{
        const {id,title,body}=person;
        return <article className='box-view' key={id}>
         <i class="fas fa-times fa-lg"></i> 
         <h5 onClick={()=>setShowModal(true)} >{title}</h5>
         <p>{body} </p> 
         <p style={{color:'grey'}}>Mon, 21 Dec 2020 14.5654 GMT </p> 
         <img  className=' v-image'   src='/ll.jpg' alt='picsss'/>
         </article>
        })}
        </section>
     ) ;
}
 
export default Record;