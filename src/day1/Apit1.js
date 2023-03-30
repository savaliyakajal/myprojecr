import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
function Apit(props) {

  const [data, setData] = useState([]);
  const Nevigate = useNavigate();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    // get gata local stor
    let localData = JSON.parse(localStorage.getItem("crud"));

    if (localData !== null) {
      //  data male e data  setdata ma set karaviya
      setData(localData);
    }
  };
  //  new data addd 
  const hendelclick = () => {
    Nevigate("/Home");
    
  };
    //  data delet karava mate
  const hendelDelet = (event) => {
    console.log("event---id",event);
    
    let val = JSON.parse(localStorage.getItem("crud"));
    console.log("getdata----",val);
    // get local data all
 console.log();
    let fData = val.filter((v, i) => v.id !== event);
    //  carnt value  and index  amathi avti val.id  & event id mach athay te delet karvano che
    console.log(fData);
    //  deta set karvana
    localStorage.setItem("crud", JSON.stringify(fData));

    getdata();
  };
//  je data par Edit karva na che te data malche index ma
  const hendelEdit = (data) => {
    console.log(data);
    
    // Nevigate("/Editdata")
    Nevigate(`/Editdata/${data.id}`)
  };
  return (
    //  table creat
    <div className="App">
      <h5> crud </h5>
      <div>
        <button onClick={hendelclick}> Add data</button>
     
      </div>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {/*get karel data  show karava */}
          {data.map((i, index) => {
            
            return (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.phone}</td>
                <td>{i.email}</td>

                <td>
                  <button onClick={() => hendelDelet(i.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => hendelEdit(i)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Apit;
