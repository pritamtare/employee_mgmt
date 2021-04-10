import React,{useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {
    let his1=useHistory();
    const [user ,setUser]=useState({
        name:"",
        designation:"",
        technologies:"",
        skills:"",
        availability:"",
        base_location:"",
        open_relocate:""
    });
    const {  name, designation, technologies, skills, availability, base_location, open_relocate}=user;
    const onInputChange=(e)=>{
        // console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmited=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        his1.push("/");
    }
    return (
   
      <div className="container">
         <h1>ADD Employee</h1> 
         <Link className="btn btn-primary" to="/">Back to home</Link>  
      <form onSubmit={e=>onSubmited(e)}>
      <div className="form-group">
          <label htmlFor="name1">Name</label>
          <input type="text" className="form-control" id="name1" name="name" value={name} onChange={e=> onInputChange(e)} />
        </div>
     
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input type="text" className="form-control" id="designation" name="designation" value={designation} onChange={e=> onInputChange(e)}/>
          
        </div>
        <div className="form-group">
          <label htmlFor="technologies">Technologies</label>
          <input type="text" className="form-control" id="technologies" name="technologies" value={technologies} onChange={e=> onInputChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input type="text" className="form-control" id="skills" name="skills" value={skills} onChange={e=> onInputChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <input type="text" className="form-control" id="availability" name="availability" value={availability} onChange={e=> onInputChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="base_location">Base Location</label>
          <input type="text" className="form-control" id="base_location" name="base_location" value={base_location} onChange={e=> onInputChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="open_relocate">Open Relocate</label>
          <input type="text" className="form-control" id="open_relocate" name="open_relocate" value={open_relocate} onChange={e=> onInputChange(e)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
    )
}
