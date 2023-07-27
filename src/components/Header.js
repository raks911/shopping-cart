import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {DLT} from '../redux/actions/action';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const dlt = (id) => {
      dispatch(DLT(id));
    }
    const getData=useSelector((state) => state.cartreducer.carts );
  return (
    <div className='bg-pink-400 '>
        <div className='flex justify-between'>
            <ul className='  flex items-center justify-between w-1/3 mx-20 h-14'>
                <NavLink to="/" className='text-lg font-light tracking-wide text-white'>
                    Home
                </NavLink>
                <NavLink to="/cart" className='text-lg font-light tracking-wide text-white '>
                    Cart
                </NavLink>
                <NavLink to="/contact" className='text-lg font-light tracking-wide text-white'>
                    Contact
                </NavLink>
            </ul>
            <div className='w-[10rem] my-4 mx-[-1%] flex-col relative'>
            <div className='flex'>
        <Badge badgeContent={getData.length} color="primary" onClick={() => {
            const menu=document.querySelector('.menu');
            if(menu.style.display==='block'){
                menu.style.display='none';
            }
            else{
                menu.style.display='block';
            }
            
        }}>
      <MailIcon color="action"/>
    </Badge>
        </div>
            <div className="menu absolute top-[100%] left-[-180%] bg-white w-[23rem] z-10 h-[40rem] overflow-scroll shadow-xl"> 
            {
                getData.map((product,id) => {
                    return (
                        <>
                        <div className='border-xl flex mx-2 mt-3 justify-around items-center'>
                            <NavLink to={`/cart/${product.id}`}><img src={product.imgdata} alt="" className='w-[10rem]'></img></NavLink>
                            <div className='items-center '>
                                <h1>{product.rname}</h1>
                                <h1 className='mt-1 font-bold'>${product.price}</h1>
                                <h1 className='mt-5 text-red-500' onClick={() => dlt(product.id)}>Delete</h1>
                            </div>
                            <div>
                               
                            </div>
                        
                        </div>
                        
                        </>
                    )
                })
                
            }
             </div>
                
        </div>
        </div>
        
    </div>
  )
}

export default Header


