
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Stepper, Step, StepLabel, Divider, IconButton, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { shades } from "../../theme";
import { decreaseCount, increaseCount, removeFromCart } from "../../state";
import  CloseIcon  from '@mui/icons-material/Close';
import  RemoveIcon  from '@mui/icons-material/Remove';
import  AddIcon  from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";




const Order = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const Navigate=useNavigate();
  const dispatch = useDispatch();
  const urlForServer = "http://localhost:3200/";
  const token = window.localStorage.getItem("token");

const PriceCal = cart.reduce((total, item)=>{
  return total + item.count * item.price;
}, 0);


const subPrice = (PriceCal).toFixed(2);
const taxPriceCal = (PriceCal*0.13);
const taxPrice = (PriceCal*0.13).toFixed(2);
const totalPriceCal = taxPriceCal+PriceCal;
const totalPrice = totalPriceCal.toFixed(2);




const onSubmitOrder = async () => {
  
 if(cart.length!==0){

  await axios.post(urlForServer + "order", {
    order: cart,
    subPrice: PriceCal,
    tax:taxPriceCal,
    totalPrice:totalPriceCal,
    customer:token
  });
  alert("Submit Successful");
  // fetchData();
  // setPreview(null);
  Remove();
  window.location.href = "./menu";
}else{
    alert("The cart is empty")
}



};

const Remove =()=>{
    cart.map((item) => (
     
        dispatch(removeFromCart({_id:item._id}))
    ));


  
}


const [display, setDisplay] = useState(null);

console.log(cart);
  return (
    <div className="App"  style={{width:"80%", margin:"80px auto"}}>
    


        <h1>Order</h1>
        <button onClick={Remove}>Remove</button>
        <Box>
                {cart.map((item) => (
                  
                 
                    <Box key={`${item.name}-${item._id}`}>
                     
                        <Box p="15px 0" display="flex" >
                            <Box flex = "1 1 40%" paddingLeft="10%">
                                <img   width="300px"  src={item.image} alt={item?.name} />
                            </Box>
                            <Box flex = "1 1 60%" >
                                <Box mb="5px" pl="10px" display="flex" alignItems="center">
                                    <h2>{item.name}</h2>
                                    <IconButton onClick={()=> dispatch(removeFromCart({ id:item.id}))}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Box>

                                
                                {/*Amount*/}
                                <Box m="5px 0" display="flex" alignItems="center" >
                                    <Box display="flex" alignItems="center" textAlign="center" padding="auto" border={`1.5px solid ${shades.neutral[600]}`} m="10px" >
                                        <IconButton onClick={()=> dispatch(decreaseCount({ _id:item._id }))} >
                                            <RemoveIcon sx={{fontSize:"2rem"}}/>
                                        </IconButton>
                                        <Typography fontSize="150%">
                                            {item.count}
                                        </Typography>
                                        <IconButton onClick={()=> dispatch(increaseCount({ _id:item._id }))}>
                                            <AddIcon sx={{fontSize:"2rem"}}/>
                                        </IconButton>
                                    </Box>
                                    {/*Price*/}
                                    <Typography marginLeft="200px" fontSize="150%" fontWeight="bold">
                                        ${item.price}
                                    </Typography>
                                </Box>
                                
                            </Box>
                        </Box>
                        <Divider/>
                        
                    </Box>
                 
                ))}
            </Box>
            <div style={{margin:"20px", display:"flex",  justifyContent:"flex-end"}}  >
                <div style={{padding:" 10px "}}>
                    <h2>Subtotal: ${subPrice} </h2> 
                    <h2>Tax: ${taxPrice} </h2> 
                    <h2>Total Price: ${totalPrice} </h2> 
                    {/* <h2>Tax: ${taxPrice} </h2> 
                    <h2>Total: ${totalPrice} </h2>  */}
                    <Button  sx={{ 
                                backgroundColor: shades.primary[400],
                                color: "white",
                                minWidth: "100px",
                                padding: "20px 40px",
                                m: "10px 0",
                                '&:hover':{ backgroundColor: shades.neutral[300], color:"black" }
                                
                    }} onClick={onSubmitOrder}>Submit Order!</Button>
                </div>
            </div>
            
    </div>

    

  
    )

                }


export default Order;