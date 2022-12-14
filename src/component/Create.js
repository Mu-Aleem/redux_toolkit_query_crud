import React, { useState } from "react";
import { useAddNewUserMutation } from "../redux/features/users";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [addNewUser, response] = useAddNewUserMutation();

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewUser(contactInfo);
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contactInfo.name}
          placeholder="Enter Name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Name"
          onChange={(e) => handleChange(e)}
          value={contactInfo.email}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Create;
