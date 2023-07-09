import React from 'react'
import { useDispatch } from 'react-redux';
import ProductsData from './PorductData';
import { ADD } from '../redux/actions/action';
const Products = () => {
    const dispatch = useDispatch();
    const send = (e) => {
      dispatch(ADD(e));
    }
  return (
    <div className=' mt-3 text-center flex flex-col items-center'>
        <h1 className='text-xl font-bold w-full'>Select Products</h1>
        <div className=' w-[95%]  grid lg:grid-cols-4 sm:grid-cols-2'>
            {
              ProductsData.map((product,id) => {
                return(
                    <>
                    <div className='text-left px-2 py-2 border-4 mx-3 my-3 shadow-md rounded-xl'>
                        <img src={product.imgdata} alt="" className='mx-[2.5%] w-[95%] h-[13rem] mt-2 rounded-xl'></img>
                        <div className="mx-10 my-4">
                        <h1 className='font-bold'>{product.rname}</h1>
                        <h1> price : ${product.price}</h1>
                        <button onClick ={ () => {
                         send(product);
                        }} className="w-full bg-blue-500 mt-5 text-white tracking-wide rounded-md h-[2.5em]"  >Add to Cart</button>
                        </div>
                        
                        
                    </div>
                    </>
                )
              })  
            }
        </div>
    </div>
  )
}

export default Products;