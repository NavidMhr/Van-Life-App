import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostDetail(){
      const {hostDetail} = useOutletContext()

    return(
        <>
            <div className="host-detail">
                {
                    hostDetail
                }    
            </div>    
        </>
    )
}