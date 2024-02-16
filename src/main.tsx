import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import "./main.scss"

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const TempHeader = ()=><><Link to={"/"}>Home</Link><Link to={"/shop"}>shop</Link><Link to={"/details/random"}>details</Link></>

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <TempHeader />
        <Routes>
            <Route path={"/"} element={<h1>Home</h1>}/>
            <Route path={"/shop"} element={<h1>Shop</h1>}/>
            <Route path={"/details/:productID"} element={<h1>Product details</h1>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
