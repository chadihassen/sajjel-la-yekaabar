import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edituser, logout } from "../JS/userSlice/userSlice";

function Profil({ping, setping}) {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edited, setedited] = useState({

    name: user?.name,
    lastname: user?.lastname,
    email: user?.email,
    password: user?.password,
  })
  return (
    <div>
      
      <div>
        <div className="ettaswira" style={{width:"400px",marginTop:"45px"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-we-PQ8adHvGI7Y9RxZfYl8We3BSNmHkDlg&usqp=CAU" style={{width:"150px" , borderRadius:"50%"}}/>
          <h1 style={{marginTop:"20px" , marginLeft:"20px"}}>hello {user?.name}</h1>

      <button
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
        style={{marginTop:"20px" , marginLeft:"35px"}}>
        logout
      </button>
        </div>
        <div style={{marginLeft:"500px" , marginTop:"-160px"}}>
        <div className="therow"> 
          <h3>First name</h3>
          <input placeholder={user?.name} onChange={(e)=>setedited({...edited,name:e.target.value})} style={{width:"300px"}}></input>
        </div>
        <div>
          <h3>Last name</h3>
          <input placeholder={user?.lastname} onChange={(e)=>setedited({...edited,lastname:e.target.value})} style={{width:"300px"}}></input>
        </div>
        <div>
          <h3>Mobile number</h3>
          <input placeholder={user?.email} onChange={(e)=>setedited({...edited,email:e.target.value})} style={{width:"300px"}}></input>
        </div>
        <div>
          <h3>Password</h3>
          <input type="password" placeholder={user?.password} onChange={(e)=>setedited({...edited,password:e.target.value})} style={{width:"300px"}}></input>
        </div>
        <div><button onClick={()=>{dispatch(edituser({id:user?._id, edited}));setping(!ping)}}>Edit</button></div>
        </div>

  

      </div>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
