import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./DataContext";
import NavComp from "./NavComp";

function Table(){
    const contextData = useContext(DataContext);
    console.log(contextData);
return(
    <>
    <NavComp />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    contextData.entries.map((item)=> (
                        <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.id}</td>
                        <td>
                            <Link to='/editStudent' state={{data: item.id}} >Edit</Link>
                        </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
)
}

export default Table;