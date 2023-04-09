
import React, { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
import { setItems } from "../../state";
import { useSelector, useDispatch } from 'react-redux';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const urlForServer = "http://localhost:3200/";
    async function getItems() {
        // const items = await fetch(
        //   // "http://localhost:1337/api/items?populate=image",
       
        //   { method: "GET" }
        // );
        let history = await axios.get(urlForServer + "order");
        // const itemsJson = await items.json();
        dispatch(setItems(history.data));
      }
    
      useEffect(() => {
        getItems();
      }, []);
  return (
    <div style={{width:"80%", margin:"80px auto"}}>

        <h1>Order History</h1>

    </div>
  )
}

export default OrderHistory;