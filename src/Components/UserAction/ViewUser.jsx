
import React,{useState, useEffect} from 'react'
import { useHistory,useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
    const [user ,setUser]=useState({
        name:"",
        designation:"",
        technologies:"",
        skills:"",
        availability:"",
        base_location:"",
        open_relocate:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
const loadUser=async ()=>{
    const result=await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data)
}

    return (
        <div className="container">
            <h1>Employee Data</h1>
            <Link className="btn btn-primary" to="/">Back to home</Link>
    <h1>Employee id:{id}</h1>
    <ul className="list-group">
        <li className="list-group-item"><span className="font-weight-bold p-2">Name:</span>{user.name}</li>
        <li className="list-group-item"><span className="font-weight-bold p-2">Designation:</span>{user.designation}</li>
        <li className="list-group-item"><span className="font-weight-bold p-2">Technologies:</span>{user.technologies}</li>
        <li className="list-group-item"><span className="font-weight-bold p-2">Skills:</span>{user.skills}</li>
        <li className="list-group-item"><span className="font-weight-bold p-2">Availability:</span>{user.availability}</li>
        <li className="list-group-item"><span className="font-weight-bold p-2">Base Location:</span>{user.base_location}</li>
        <li className="list-group-item"><span className="font-weight-bold p-2">Open Relocate:</span>{user.open_relocate}</li>
    </ul>
        </div>
    )
}
