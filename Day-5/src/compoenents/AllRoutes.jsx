import { Routes, Route } from "react-router-dom";
import Angular from "./Angular";
import Body from "./Body";
import C from "./C";
import Javascript from "./JavsScript";
import Python from "./Pyhton";


function AllRoutes(){

    return(
        <Routes>
           <Route path="/" element={<Body />} />
           <Route path ="/Javascript" element={<Javascript />} />
           <Route path ="/Angular" element={<Angular />} />
           <Route path ="/Python" element={<Python />} />
           <Route path ="/C" element={<C />} />
        </Routes>
    )
}

export default AllRoutes