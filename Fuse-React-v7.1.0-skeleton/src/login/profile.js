import React from "react";
import { Card } from "@mui/material";
export const Profile = () =>{

    let idUser = localStorage.getItem('email')
     
    return(

        <center>
            <Card style={{width:"500px"}}>
        <input type="image"></input>
        <button >ajouter un image de profile </button>
        <h1>{idUser} </h1>
        </Card>
        </center>
        
    )
}