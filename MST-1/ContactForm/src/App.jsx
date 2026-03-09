import React, { useState } from "react";
import "./App.css";

function App() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(fullname === "" || email === "" || message === ""){
      setError("All fields are required");
      return;
    }

    if(email.length < 10){
      setError("Email must contain minimum 10 characters");
      return;
    }

    setError("");
    alert("Form Submitted Successfully");

    setFullname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">

      <h2>Contact Us Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          value={fullname}
          onChange={(e)=>setFullname(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>

      </form>

      {error && <p className="error">{error}</p>}

    </div>
  );
}

export default App;