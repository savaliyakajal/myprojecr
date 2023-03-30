import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

function Apit(props) {
  const [data, setData] = useState([]);
  const [sortdata, setSortdata] = useState([]);
  // const [prefix, setPrefix] = useState("");
  // const [suggestion, setSuggestion] = useState("");
  const Nevigate = useNavigate();
console.log(data);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    let localData = JSON.parse(localStorage.getItem("cruformdatad"));
    if (localData !== null) {
      setData(localData);
    }
  };

  const hendelclick = () => {
    Nevigate("/Home");
  };

  const hendelDelet = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let val = JSON.parse(localStorage.getItem("cruformdatad"));

        for (let i in val) {
          if (val[i].id == id) {
            val.splice(i, 1);
          }
        }
        localStorage.setItem("cruformdatad", JSON.stringify(val));
        getdata();
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        let val = JSON.parse(localStorage.getItem("cruformdatad"));
        swal("Your imaginary file is safe!");
      }
    });

    // let fData = val.filter((v, i) => v.id !== id);
    // localStorage.setItem("cruformdatad", JSON.stringify(fData));
  };
  const hendelEdit = (data) => {
    Nevigate(`/Editdata/${data.id}`);
  };

  const onChange = (event) => {
    const get=event.target.value
 
    const search = JSON.parse(localStorage.getItem("cruformdatad"));
    const filter = search.filter((i) => i.name.includes(get) );

    if (!event.target.value) {
      setData(search);
    } else {
      setData(filter);
    }
  };


  const Sortingdata = () => {
    // const sort = data.sort((a, b) => a.name.localeCompare(b.name));
    const sort = data.sort((a, b) => a.phone.localeCompare(b.phone));

    // const sort = data.sort((a, b) => a.name);
    // localStorage.setItem("cruformdatad", JSON.stringify(sort));
    // setSortdata(sort);
    console.log("--->", sort)
    setData(sort)
  };

  const onchangeselecttion = (event) => {
    const selectdata = JSON.parse(localStorage.getItem("cruformdatad"));
    const dilter = selectdata.filter((i) => i.name === event.target.value);
    console.log(dilter);
    if (!event.target.value) {
      setData(selectdata);
    } else {
      setData(dilter);
    }
  };

  return (
    <div className="App">
      <h5> crud </h5>
      <div>
        <button onClick={hendelclick}> Add data</button>
        <br />
        <label>search</label>
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="search here..... "
          onChange={onChange}
        />
        <select onChange={onchangeselecttion}>
          <option value={""}>....select....</option>
          {JSON.parse(localStorage.getItem("cruformdatad"))?.map((i) => {
            return <option value={i.name}>{i.name}</option>;
          })}
        </select>
      </div>

      <Table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>
              name 
              <button onClick={Sortingdata}>ascending order</button>
            </th>
            <th>phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, index) => {
            return (
              <tr key={index}>
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
