import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function Crud1(props) {
     const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [Update, setUpdate] = useState();
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = useState()
    const [uid, setUid] = useState();
   

//  delet thay tyare dailog box openkarava


    const handleClickDopen = (id) => {
        setDopen(true);
        setDid(id);
    };


    //  add data karava

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        setDopen()
        // formik.resetForm();
        // deta sbumit pachi from reset karva
    };

//  yup 
    let crud = {
        name: yup.string().required('please enter name'),
        price: yup.string().required('please enter price'),
        email: yup.string().required('please enter email'),
    }

//  schema
    let schema = yup.object().shape(crud);
//   fromik 
    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            email:'',
            
        },
        validationSchema: schema,

        //  from ni onsubmit par value
        onSubmit: values => {
            if (Update) {
                handleupdate(values)
            } else {
                handleSubmitdata(values)
            }
        }
    })
//    deta  edit thay te updeta karavi local ma set karava
    const handleupdate = (values) => {
        let localdata = JSON.parse(localStorage.getItem("crud"));
        // veriable
        
        let udata = localdata.map((l, i) => {
            console.log(l.id === uid);
            if (l.id === uid) {
                return { id: uid, ...values };
            } else {
                return l;
            }
        })
        console.log(udata);
        // updet data local ma set krva
        localStorage.setItem("crud", JSON.stringify(udata))
        setOpen(false)
        // model open che te  falsekarva
        setUpdate(false)
        getdata()
    }
    // je data  from ma input kari te data  localstorage ma submit karava
    const handleSubmitdata = (values) => {
        let localdata = JSON.parse(localStorage.getItem("crud"));

        let data = {
            id: Math.floor(Math.random() * 1000),
            ...values
            // speding opreter id sevay ni biji value 
        }

        if (localdata === null) {
            localStorage.setItem("crud", JSON.stringify([data]))
        } else {
            localdata.push(data)
            localStorage.setItem("crud", JSON.stringify(localdata))
        }

        setOpen(false);
        getdata()

    }

//  localStorage mathi deta  get karava getdata

    const getdata = () => {
        let localData = JSON.parse(localStorage.getItem("crud"))

        if (localData !== null) {
            setData(localData)
        }
    }
// data geta karava re render useEffect
    useEffect(
        () => {
            getdata()
        },
        [])
  
      
// deta ma edit karva mare

        const handleEdit = (params) => {
            setOpen(true);
            // modelopenkarvamate
            //console.log(params.row);
            setUid(params.row.id)
            setUpdate(true)
            console.log(params.row.id)
            formik.setValues({
                name: params.row.name,
                price: params.row.price,
                email:params.row.email,
              
            });
        }
    
        // data delet karavamate  hendledelet
        const handleDelete = () => {
            let localData = JSON.parse(localStorage.getItem("crud"))
            console.log(localData);
    
            let filter = localData.filter((v, i) => v.id !== did);
            console.log(filter);
    
            localStorage.setItem("crud", JSON.stringify(filter));
            getdata()
            setDopen(false)
        }

 
        // deta show karavamate

    const columns = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: ' Price', width: 130 },
        { field: 'email', headerName: ' email', width: 130 },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                // 
                <>
                    <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params)}>
                        <CreateIcon />
                    </IconButton>
                </>
            )
        }
    ];




    return (


        <Box>
            <Container>
                <div>
                    <center>
                        <Button variant="outlined" onClick={() => handleClickOpen()}>
                            Add data
                        </Button>
                    </center>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />

                    </div>
                    {/* dialog box close karva */}
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Medicine</DialogTitle>
                        <Formik values={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>

                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="name"
                                        type="name"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                    />


                                    <TextField
                                        margin="dense"
                                        id="price"
                                        label="price"
                                        type="price"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                     
                                    />
                                      <TextField
                                        margin="dense"
                                        id="email"
                                        label="email"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                      
                                   />

                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button type="submit">Submit</Button>
                                    </DialogActions>
                                </DialogContent>
                            </Form>
                        </Formik>
                    </Dialog>
                    <div>
                    {/* deletmate dialog box */}
                        <Dialog
                            open={dopen}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Are You Sure Delete  Data ...? "}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => handleDelete()} >yes</Button>
                                <Button onClick={handleClose}>No</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </Container>
        </Box>

    )



}

export default  Crud1 
    