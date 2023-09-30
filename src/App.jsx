import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Layout from "./components/Layout";
import Vans from "./page/Vans/Vans"
import VansFilter from "./page/Vans/VansFilter"
import About from "./page/About";
import Home from "./page/Home";
import Host from "./page/Host";
import VanDetail from "./page/Vans/VanDetail";
import HostLayout from "./components/HostLayout";
import Dashboard from "./page/HosLayout/Dashboard";
import Income from "./page/HosLayout/Income";
import Reviews from "./page/HosLayout/Reviews";
import HostVans from "./page/HosLayout/HostVans";
import HostVanDetail from "./page/HosLayout/HostVanDetail";
import HostDetail from "./page/HosLayout/HostDetail";
import HostPricing from "./page/HosLayout/HostPricing";
import HostPhotos from "./page/HosLayout/HostPhotos";
import Login from "./components/Login";
import AuthLayout from "./components/AuthLayout"

import "./server"
import NotFound from "./components/NotFound";
export default function App(){

  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route index element={<Host/>} />
            <Route path="about" element={<About/>} />
            <Route path="login" element={<Login/>} />
              <Route path="vans" element={<Vans/>}>
                <Route index element={<VansFilter/>} />
              </Route>
            <Route path="vans/:id" element={<VanDetail/>} />

              <Route element={<AuthLayout/>}>
                <Route path="host" element={<HostLayout/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path="income" element={<Income/>}/>
                  <Route path="vans" element={<HostVans/>}/>
                    <Route path="vans/:id" element={<HostVanDetail/>}>
                        <Route index element={<HostDetail/>} />
                        <Route to="pricing" element={<HostPricing/>} />
                        <Route to="photos" element={<HostPhotos/>} />
                    </Route>
                  <Route path="reviews" element={<Reviews/>}/>
                </Route>
              </Route>
                <Route path="*" element={<NotFound/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
