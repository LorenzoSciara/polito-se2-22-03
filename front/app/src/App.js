import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row} from 'react-bootstrap';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { NavigationBar } from './components/Navbar';
import routes from './navigation/routes';
import db from "./firebase-config.js";
import React, {useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';


function App() {

    //const [services, setServices] = useState([]);
    // const [customers, setCustomers] = useState([]); 
    // const [loggedIn, setLoggedIn] = useState(false);

    //const servicesCollectionRef = collection(db, "services");
    //const customersCollectionRef= collection(db, "customers"); //reminder: create customer collection with id and serviceid associated

    // useEffect(() => {
    //     const getServices = async() => {
    //         const data = await getDocs(servicesCollectionRef);
    //         setServices(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
    //     }
    //   //   const getCustomers = async() => {
    //   //     const data = await getDocs(customersCollectionRef);
    //   //     setCustomers(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
    //   // }
    //     getServices();
    //     //getCustomers(); 
    // }, []);
    
  return( 
      <BrowserRouter> 
      <NavigationBar/>
        <Routes>
          {routes.map((route)=>{
              return(<Route 
                key={route.key}
                path={route.path}
                element={route.screen}
                />);
            })
          }
        </Routes>
      </BrowserRouter>
  );
}



export default App;
