import Table from 'react-bootstrap/Table';
import './Data.css'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react';
import Client from './Client';
import Constructor from './Constructor';

function Data() {
  const[value,setValue]=useState(true);
  return (
    <>
     <Navbar />
     {
      value ? <Client/>:<Constructor/>
     }
   
    {/* <div className="table-h1">

    <h1>Data</h1>
    </div>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
   */}



    
    </>
  )
}

export default Data