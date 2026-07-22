import { useRef, useState } from "react";

import axios from "axios";

import Singupfront from "./Singupfront";





const Signup = () => {
  const name = useRef(null);
  const email = useRef(null);
  const [message, setMessage] = useState("");

  const btnhader = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: name.current.value,
      email: email.current.value,
    };

    try {
      const response =await axios.post("http://localhost:7000/api/v1/user", data);
      setMessage(response.data.message||"Data sent successfully");
      console.log(response.data);
      form.reset();
    } catch (error) {
      setMessage(error.message);
    }
  };




  return (

    <>

    <Singupfront btnhader={btnhader} name={name} email={email} message={message} />
    
    </>
    
  );
};

export default Signup;
