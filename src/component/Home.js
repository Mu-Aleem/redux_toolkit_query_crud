import React from "react";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../redux/features/users";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useGetUsersQuery();
  const [DeleteUser] = useDeleteUserMutation();

  if (isLoading) return <h2>Please wait...</h2>;
  if (isError) return <h2>{isError}</h2>;

  //   Delete the user

  //   useDeleteUserMutation

  const deleteUser = (data) => {
    DeleteUser(data);
  };

  const singleUser = (data) => {
    navigate(`/single/${data}`);
  };

  return (
    <>
      <h1 className="MainTit">CRUD With Toolkit Query </h1>
      <button className="Create" onClick={() => navigate("/create")}>
        Create
      </button>
      <div className="main">
        {data &&
          data
            .map((data, i) => (
              <>
                <div className="child" key={i}>
                  <h1>{data.name}</h1>
                  <h6>{data.email}</h6>
                  <div className="buttonMain">
                    <button onClick={() => deleteUser(data.id)}>Delete</button>
                    {/* <button onClick={ ()=> navigate(`/single/${data}`) }Update</button> */}
                    <button onClick={() => navigate(`/update/${data.id}`)}>
                      Update
                    </button>
                    <button onClick={() => singleUser(data.id)}>View</button>
                  </div>
                </div>
              </>
            ))
            .reverse()}
      </div>
    </>
  );
};

export default Home;
