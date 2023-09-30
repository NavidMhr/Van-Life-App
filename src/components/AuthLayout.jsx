import React, { useState } from "react";
import { Navigate, Outlet , useLocation } from "react-router-dom";

export default function AuthLayout(){
  const [AuthRequierd] = useState(true)

    return AuthRequierd ? <Outlet/> : <Navigate to="/login" />
}