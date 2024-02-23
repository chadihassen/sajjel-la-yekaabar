import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/userSlice/userSlice';
import { Link, useNavigate } from 'react-router-dom';

function Navbarr() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Navbar bg="white" data-bs-theme="white" className='thenav'>
    <Container>
      <div className='wc'>     
         <Navbar.Brand href="#home"><img src="/DBB.png" style={{width:"200px" , height:"45px"}}></img></Navbar.Brand>
</div>
      <Nav className="me-auto">
     <Nav.Link href="#home"><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></Nav.Link>
        <Nav.Link href="#features"><Link to="/shop" style={{textDecoration:"none", color:"black"}}>Shop</Link></Nav.Link>
        <Nav.Link href="#pricing"><Link to="/contact" style={{textDecoration:"none", color:"black"}}>Contact</Link></Nav.Link>
        <Nav.Link href=""><Link to="/about" style={{textDecoration:"none", color:"black"}}>About</Link></Nav.Link>
       { !user?<Nav.Link href="#pricing"><Link to="/login" style={{textDecoration:"none", color:"black"}}>Login</Link></Nav.Link> 
       :<div style={{display:"flex" , marginLeft:"500px", justifyContent:"space-between"}} >
                <Nav.Link href=""><Link to="/pannier" style={{textDecoration:"none", color:"black"}}><img src='/shoppannier.png' style={{width:"45px"}}/></Link></Nav.Link>

        <Nav.Link href=""><Link to="/profil" style={{textDecoration:"none", color:"black"}}>Profil</Link></Nav.Link>
      
        <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
          
        }}
        style={{borderRadius:"10px" , backgroundColor:"#0d6efd" , width:"100px", color:"white", border:"none"}}
        >
        logout
      </button>
      </div>}
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbarr