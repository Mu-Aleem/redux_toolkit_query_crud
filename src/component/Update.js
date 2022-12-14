import React, { useState, useEffect } from "react";
import {
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../redux/features/users";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
  });
  const [updateUsers, { isLoading: isUpdating }] = useUpdateUserMutation();

  const { data: updateData } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el) => el.id == id),
    }),
  });

  useEffect(() => {
    setContactInfo({
      name: updateData.name,
      email: updateData.email,
      id: updateData.id,
    });
  }, [updateData]);

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("contactInfo", contactInfo);
    updateUsers(contactInfo);
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;
