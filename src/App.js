import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Compo/Contact";
import DataContext from "./Compo/DataContext";
import Edit from "./Compo/Edit";
import Home from "./Compo/Home";
import Table from "./Compo/Table";

function App(){
  const [data, setData] = useState([{name: "PrepBytes1", id: 1}, {name:"PrepBytes2", id: 2}]);
  return(
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/student" element={
      <DataContext.Provider value={{entries: data, updateFunction: setData}}> 
        <Table/> 
      </DataContext.Provider>
    } />

      <Route path="/editStudent" element={
        <DataContext.Provider value={{entries: data, updateFunction: setData}}>
          <Edit />
        </DataContext.Provider>
      } />

      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/addStudent" /> */}
    </Routes>
  )
}

export default App;