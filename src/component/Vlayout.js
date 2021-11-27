import React ,{useState , useEffect } from 'react' ;
import Record from './Record' ;
const url="https://jsonplaceholder.typicode.com/posts";


const Vlayout = ({setShowModal}) => {
    useEffect(()=>{
        fetchRecord();
    })
    
     const [ record,setRecord ] =useState([]) ; 

 
 const fetchRecord= () => {
       console.log('runs')
    fetch(url).then((res)=>{
        return res.json()
    })
    .then(record=>{
        setRecord(record) 
      
    })
    .catch((err)=>{
        console.log(err);
    })
}
    return ( <div>
        
        <div className='vertical-component'>
        <Record rec={record} setShowModal={setShowModal}/>
        </div>
    </div> );
}
 
export default  Vlayout;