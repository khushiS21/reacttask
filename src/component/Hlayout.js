import React ,{useState , useEffect } from 'react' ;
import Data from './Data' ;
const url="https://jsonplaceholder.typicode.com/posts";


const Hlayout = ({setShowModal}) => {
    useEffect(()=>{
        fetchData();
    })
     
     const [ data,setData ] =useState([]) ; 

 
 const fetchData = () => {
       console.log('runs')
    fetch(url).then((res)=>{
        return res.json()
    })
    .then(data=>{
        setData(data) 
        
    })
    .catch((err)=>{
        console.log(err);
    })
}
    return ( <div >
        <div className='horizontal-component' >
        <Data item ={data} setShowModal={setShowModal} />
        </div>
    </div> );
}
 
export default Hlayout;