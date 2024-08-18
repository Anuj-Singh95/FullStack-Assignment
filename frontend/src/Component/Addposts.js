import React from 'react'
import './CSS/AddProject.css'
import { ToastContainer, toast } from "react-toastify";


import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Addposts() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)

    const chk = () => {
        console.log(title , desc);
        
    }


    const post = () => {
        if(title == "" || desc == ""){
           console.log("Plz add all the Fields");
           return
        }

        fetch("http://localhost:5000/createPost", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              desc: desc
    
            })
          }).then(res => res.json())
            .then(data => {
              if (data.error) {
                // notifyA(data.error)
                console.log(data.error);
                
              } else {
                // notifyB(data.message)
                console.log(data.message);
                
                // alert(data.message)
                navigate('/')
              }
              console.log(data)
            })
            .catch(err => console.log(err))

    }



    return (
        <div>

            <div className="addProjectMainBox">
                <h1>Add Your Details</h1>

                <div className="input-boxes">
                    <input type="text" placeholder="Add your title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                    <input type="text" placeholder="Add your content"  value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
                </div>

                <button onClick={() => {post()}}>Submit</button>
            </div>



        </div>
    )
}

export default Addposts