import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
const Update = () => {
    let [name, setName] = useState("");
      let [email, setEmail] = useState("");
      let [course, setCourse] = useState("");
      let [semester, setSemester] = useState("")
      
      let [message, setMessage] = useState("");

let navigate = useNavigate();
      let {id} = useParams()
      let nameHandler = (e)=>{
         e.preventDefault();
        setName(e.target.value)
      }
        let emailHandler = (e)=>{
           e.preventDefault();
         setEmail(e.target.value)
      }
        let courseHandler = (e)=>{
           e.preventDefault();
         setCourse(e.target.value)
      }
        let semesterHandler = (e)=>{
           e.preventDefault();
         setSemester(e.target.value)
      }
      

     useEffect(()=>{
        const fetchStudent = async () => {
          try{
             const response=await axios.get(`http://localhost:7000/api/v1/student/${id}`)
             const student = response.data.data

             setName(student?.name || "")
             setEmail(student?.email || "")
             setCourse(student?.course || "")
             setSemester(student?.semester || "")
          }
          catch(err){
            console.log(err)
          }
        };

        fetchStudent();
     }, [id]);


  let updateHandler =async(e)=>{
       e.preventDefault();
       let payload ={name,email,course,semester};
       try{


        const response = await axios.put(`http://localhost:7000/api/v1/student/${id}`,payload)
       
        alert("data saved successfully !!!")
        console.log("updated saved")
        setName("")
        setCourse("")
        setEmail("")
        setSemester("")
        setMessage(response.data.message)
        //  setTimeout(()=>{})
        navigate('/allusers')
        
    //    },1000)

       }
       
    catch(err){
        console.log(err)
       }
    }

  return (
    <div>
         <div className="border-2 rounded h-60 w-80 flex ">
      <form action="" onSubmit = {updateHandler}>
        <label htmlFor="name">Name</label>
        <input
          className="border-2 rounded m-2"
          id="name"
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={nameHandler}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 rounded m-2"
          id="email"
          type="text"
          placeholder="Enter your Email"
          required
          value={email}
          onChange={emailHandler}
        />
        <br />
        <label htmlFor="rollno">Roll No</label>
        <input
          className="border-2 rounded m-2"
          id="rollno"
          type="text"
          placeholder="Enter your Course"
          required
          value={course}
          onChange={courseHandler}
        />
        <br />
        <label htmlFor="contact">Contact No</label>
        <input
          className="border-2 rounded m-2"
          id="contact"
          type="text"
          placeholder="Enter your Current Semester"
          required
          value={semester}
          onChange={semesterHandler}
        />
        <br />
        <button className="border-2 rounded m-2 px-2" >
            {/* onClick={updateHandler} */}
          Update
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
    </div>
  )
}

export default Update