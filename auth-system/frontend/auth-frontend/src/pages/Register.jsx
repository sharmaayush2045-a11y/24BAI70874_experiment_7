import { useState } from "react";
import axios from "axios";

function Register() {

const [form,setForm] = useState({
name:"",
email:"",
password:"",
role:"user"
});

const handleSubmit = async(e)=>{
e.preventDefault();

await axios.post("http://localhost:5000/api/register",form);

alert("Registered Successfully");
}

return (

<form onSubmit={handleSubmit}>

<input placeholder="Name"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input placeholder="Email"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input type="password"
placeholder="Password"
onChange={(e)=>setForm({...form,password:e.target.value})}
/>

<select
onChange={(e)=>setForm({...form,role:e.target.value})}
>

<option value="user">User</option>
<option value="admin">Admin</option>

</select>

<button>Register</button>

</form>

);
}

export default Register;