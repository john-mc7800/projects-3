import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="text-center text-blue-600 text-3xl">User Id:{userid}</h1>
    </>
  );
}

export default User;
