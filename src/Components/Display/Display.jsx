import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Display = () => {
  const [users,setUser]=useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);
// const {id}=useParams();
useEffect(()=>{
    loadUsers();
},[]);
const loadUsers=async ()=>{
  const result=await axios.get("http://localhost:3003/users");
  // console.log(result)
  setUser(result.data.reverse());
}
const deleteUser=async id=>{
  await axios.delete(`http://localhost:3003/users/${id}`);
  loadUsers();
}
  return (
    <>
      <div className="display">
        <div className="container">
          <div  className="wrapper">

                <div className="buttons p-2">
                        <NavLink className="btn btn-primary" to="/adduser">Add Employee</NavLink>
                        {/* <button>Delete</button> */}
                </div>

                <div className="all-data">       
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col mx-2">id</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Technologies</th>
              <th scope="col">Skills</th>
              <th scope="col">Availability</th>
              <th scope="col">base-location</th>
              <th scope="col">open-relocate</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
           {
               users?.map((user,index)=>{
                   return( <tr>
                        <th scope="row">{index +1}</th>
                        <td>{user.name}</td>
                        <td>{user.designation}</td>
                        <td>{user.technologies}</td>
                        <th scope="col">{user.skills}</th>
                        <th scope="col">{user.availability}</th>
                        <th scope="col">{user.base_location}</th>
                        <th scope="col">{user.open_relocate}</th>
                        <td>
                             <NavLink className="btn btn-primary mr-2" to={`/Users/viewuser/${user.id}`}>Details</NavLink>
                            <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
               )})
           }
          </tbody>
        </table>
      </div>
       
        </div>
      </div>
      </div>
    </>
  );
};

export default Display;
