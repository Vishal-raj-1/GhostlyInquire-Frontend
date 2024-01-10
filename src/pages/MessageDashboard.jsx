import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../utils/token";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const MessageDashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const token = getToken();

  const getUserDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/account/user-details`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      // Handle error appropriately, e.g., show an error message
      console.error("Error fetching user details:", error.message);
    }
  };

  useEffect(() => {
    getUserDetail();
  }, [token]); // Add token as a dependency to re-run the effect when the token changes

  return (
    <div>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>URL: {user.userName}</p>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default MessageDashboard;
