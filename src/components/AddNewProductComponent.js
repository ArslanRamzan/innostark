import { Button } from '@mui/material';
import React, { useContext, useState } from "react";
import { ProductListingContext } from "../context";
import LocalStorageHelper from "../LocalStorageHelper";
import InputModule from "./InputModule";
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';


const AddNewProductComponent = () => {
  const contextValue = useContext(ProductListingContext);
  const { addProductItem } = contextValue;
  const [itemDetail, setItemDetail] = useState({name : '', description: '', price: '', date: ''});
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProductItem({
        name: itemDetail.name, 
        description: itemDetail.description, 
        price: itemDetail.price, 
        date: itemDetail.date 
    });
    var productsList = LocalStorageHelper.getObject('Items') || []
    productsList.push({
        name: itemDetail.name, 
        description: itemDetail.description, 
        price: itemDetail.price, 
        date: itemDetail.date
    })
    handleClose();
    LocalStorageHelper.storeObject('Items', productsList)
  };
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  const handleChange = (name, value) => {
    setItemDetail(prevState => ({
        ...prevState,
        [name]: value
    }));
  };
  const getDialogForAddItem = () => {
    return <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add Item
      </BootstrapDialogTitle>
      <DialogContent dividers>
          <InputModule label="Name" placeHolder="Enter Name" type="text" name="name" getValue={(name, value)=>handleChange(name, value)} />
          <InputModule label="Desc" placeHolder="Enter Description" type="text" name="description" getValue={(description, value)=>handleChange(description, value)}/>
          <InputModule label="Price" placeHolder="Enter Price" type="number" name="price" getValue={(price, value)=>handleChange(price, value)}/>
          <InputModule label="Date" placeHolder="Enter Inventory Date" type="date" name="date" getValue={(date, value)=>handleChange(date, value)}/>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit}> Add Data</Button>
      </DialogActions>
    </Dialog>
  }

  return (
    <>
        <Button style={{marginBottom:"10px"}} variant="contained" onClick={handleClickOpen}>ADD NEW</Button>
        {/* <hr/> */}
        {getDialogForAddItem()}
    </>
  );
};

export default AddNewProductComponent;
