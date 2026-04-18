import axios from "axios";
import { useState } from "react";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleLogin = async(e)=>{
e.preventDefault();

const res = await axios.post(
"http://localhost:5000/api/login",
{email,password}
);

localStorage.setItem("token",res.data.token);
localStorage.setItem("role",res.data.role);

window.location.href="/dashboard";
};

return(

<form onSubmit={handleLogin}>

<input placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

);
}

export default Login;