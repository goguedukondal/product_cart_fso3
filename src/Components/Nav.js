import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Nav() {
  return (
    <div style={{display:"flex", height:"30px" ,border:"1px solid black",color:"white",justifyContent:"space-evenly",backgroundColor:"Teal",height:"50px",alignItems:"center",margin:"10px"}}>
         <h2 style={{color:"green"}}>GEEKSTER</h2>
        <NavLink to='/'style={{color:"white",textDecoration:"none",fontSize:"20px"}} >Home</NavLink>
        <NavLink to='/product' style={{color:"white",textDecoration:"none",fontSize:"20px"}}>Product</NavLink>
        <NavLink to='/cart' style={{color:"white",textDecoration:"none",fontSize:"20px"}}>Cart</NavLink>
    </div>
  )
}

export default Nav