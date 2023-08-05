import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';
import Gif from './giphy.gif';
import "./style.css";
const Header = () => {

    const [price,setPrice] = useState(0);
    // console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }


    const total = () => {
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <Navbar  bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container >
                    <NavLink to="/" className="text-decoration-none text-white mx-5 mb-3 d-flex flex-row-reverse d-lg-flex"><span className="App_name d-flex">Riar'sTasty</span></NavLink>
                    <Nav className="menu_bar me-auto d-flex">
                        <NavLink to="/" className=" home text-decoration-none text-white  flex-row-reverse d-lg-flex "><span className='menu_bar'>Home</span></NavLink>
                        <NavLink to="/cart/:id" className="text-decoration-none text-white mx-5  flex-row-reverse d-lg-flex"><span className='menu_bar'>Collectons</span></NavLink>
                        <NavLink to="/signup" className="text-decoration-none text-white mx-3  flex-row-reverse d-lg-flex"><span className='menu_bar'>Signup</span></NavLink>
                        <NavLink to="/login" className="text-decoration-none text-white mx-3  flex-row-reverse d-lg-flex"><span className='menu_bar'>Login</span></NavLink>
                        <Nav className=' d-flex mx-5'>
                         <div className='d-flex search_bar'>
                        <input className="form-control mx-5 me-3 w-70 " type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success mx-1" type="submit">Search</button>
                        </div>
                        </Nav>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"20rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <tr>
                                    <td>

                                    <p className='text-center d-flex'>Total :₹ {price}</p>
                                    <NavLink to='/buy'>
                                    <button className='Buy_btn ' 
                                     >Buy Now</button></NavLink>
                                    
                                    </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src={Gif} alt="gif" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header