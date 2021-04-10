import React from 'react'
import Home from './Components/Home/Home';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Display from './Components/Display/Display';
import AddUser from './Components/UserAction/AddUser';
import ViewUser from "./Components/UserAction/ViewUser"

const App =()=>{

return(<>

{/* <BrowserRouter> */}
    {/* <Switch> */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/adduser" component={AddUser}/>
            <Route exact path="/Users/viewuser/:id" component={ViewUser}/>
            {/* <Route exact path="/" component={Home}/> */}
    {/* </Switch> */}
{/* </BrowserRouter> */}


{/* <Display/> */}
</>)
}


export default App;