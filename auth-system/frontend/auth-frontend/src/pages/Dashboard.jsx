import axios from "axios";
import { useEffect,useState } from "react";

function Dashboard(){

const role = localStorage.getItem("role");
const token = localStorage.getItem("token");

const [data,setData]=useState([]);

useEffect(()=>{

if(role==="admin"){

axios.get("http://localhost:5000/api/admin",{
headers:{Authorization:token}
})
.then(res=>setData(res.data));

}

},[]);

return(

<div>

<h2>Dashboard</h2>

<p>Role: {role}</p>

{role==="admin" && (

<div>
<h3>All Users</h3>

{data.map(user=>(
<p key={user._id}>{user.email}</p>
))}

</div>

)}

{role==="user" && <p>Welcome User</p>}

</div>

);
}

export default Dashboard;