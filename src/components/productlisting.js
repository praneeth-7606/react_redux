import React,{useEffect} from 'react'
import {useDispatch, useSelector}  from   'react-redux';
import Productcomponent from './productcomponent';
import axios from 'axios'
import {setproducts} from  "./redux/actions/productactions"
function Productlisting() {
  const products=useSelector((state)=>state);
  const dispatch=useDispatch()
  const fetchproducts=async()=>{
    const response =await  axios.get('https://fakestoreapi.com/products').catch(
      (err)=>{
        console.log(err);
      }
    )
    console.log(response.data);
    dispatch(setproducts(response.data))

  }
  useEffect(()=>{
    fetchproducts()

  },[])
  console.log("products : ",products);
  return (
    <div className="ui grid container">
    <Productcomponent />
  </div>
  )
}

export default Productlisting


// import React from 'react';
// import { useSelector } from 'react-redux';
// // import Productcomponent from './Productcomponent';
// import Productcomponent from './productcomponent';

// function Productlisting() {
//   const products = useSelector((state) => state.allproducts.products);

//   return (
//     <div className='container mt-5'>
//       <div className='row row-cols-1 row-cols-md-3 g-4'>
//         {/* Map through the products and render a ProductComponent for each */}
        
//           <div  className='col'>
//             <Productcomponent/>
//           </div>
        
//       </div>
//     </div>
//   );
// }

// export default Productlisting;
