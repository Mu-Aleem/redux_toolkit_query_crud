import React from "react";
import { useGetUsersQuery } from "../redux/features/users";
import { useParams } from "react-router-dom";

const Single = () => {
  const params = useParams();
  const { id } = params;

  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el) => el.id == id),
    }),
  });

  return (
    <>
      {data && (
        <>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
        </>
      )}
    </>
  );
};

export default Single;
