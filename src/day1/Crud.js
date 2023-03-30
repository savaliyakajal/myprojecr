import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import EditIcon from '@mui/icons-material/Edit';
import BorderColorIcon from "@mui/icons-material/BorderColor";



function CRUD(props) {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [open, setOpen] = useState(false);
  const [dopen, setDopen] = useState(false);
  const [data, setData] = useState([]);
  const [Did, setDid] = useState();
  const [uid, setUid] = useState();
  const [Update, setUpdate] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDopen(false);
  };


  const handledClickOpen = (id) => {
    setDopen(true);
    setDid(id);
  };

  const getdata = (data) => {
    let val = JSON.parse(localStorage.getItem("crud"));
    // console.log(val);
    setData(val);
  
  };

  useEffect(() => {
    getdata();
  }, []);

  const handlesubmitdata = (values) => {
    console.log(name, email, password);

    let data = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      password,
    };
    console.log(data);
    let val = JSON.parse(localStorage.getItem("crud"));
    if (val === null) {
      localStorage.setItem("crud", JSON.stringify([data]));
    } else {
      val.push(data);
      localStorage.setItem("crud", JSON.stringify(val));
    }
    console.log(data);

    setName("");
    setEmail("");
    setPassword("");
    getdata();
    setOpen();
  };

  const handledelet = () => {
    setDopen(false);
  
    let val = JSON.parse(localStorage.getItem("crud"));
    console.log(val);

    let fData = val.filter((v, i) => v.id !== Did);
    console.log(fData);
    localStorage.setItem("crud", JSON.stringify(fData));
    setDid();
    handleClose();
    getdata();
  
  };

 
  // const handedeEdit = (data) => {
  //   console.log(data);
  //   setOpen(true);
  //   //console.log(params.row);
  //   setUid(data.row.id)
  //   setUpdate(true)
  //   console.log(data.row.id)
  //   // setName(data.row.name)
  //   // setEmail(data.row.email)
  //   // setPassword(data.row.password)
    
 
  // };
  const handedeEdit  = (data) => {
    setOpen(true);
    setUpdate(true)
    console.log(data);
    setUid(data.row.id)
    console.log(data.row.id);
    let val = JSON.parse(localStorage.getItem("crud"));
    console.log(val);

    const udata = val.map((v, i) => {
      console.log(v.id === uid);
      console.log(uid);
     

      if (v.id === uid) {
        
        return {
          id: uid,
          ...data,
        };
      } else {
        return v;
       
      }
     
    });
    console.log(udata);
    localStorage.setItem("crud", JSON.stringify(udata));
    // setUpdate(false);
    // setOpen(false);
    getdata();
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: " name", width: 130 },
    { field: "email", headerName: "email", width: 130 },
    { field: "password", headerName: "password", width: 90 },

    {
      field: "action",
      headerName: "action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              onClick={() => handledClickOpen(params.row.id)}
              aria-label="delete"
            >
              <DeleteForeverIcon />
            </IconButton>
          </>
        );
      },
    },

    {
      field: "Edit",
      headerName: "Edit",
      width: 130,

      renderCell: (params) => {
        return (
          <>
            <IconButton
              onClick={() => handedeEdit(params)}
              aria-label="updet"
            >
              <BorderColorIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          crud
        </Button>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>crud</DialogTitle>

          
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="name"
                  name="name"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setName(e.target.value)}
                  // onChange={handleChange}
                  // value={values.name}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label=" email"
                  name="email"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="password"
                  name="password"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handlesubmitdata}>Submit</Button>
              </DialogActions>
          
        </Dialog>
        <div>
          <Dialog
            open={dopen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"select data is delet"}
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={() => handledelet()} autoFocus>
                yse
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default CRUD
