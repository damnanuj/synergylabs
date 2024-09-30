import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 500000));
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        // console.log(response.data);
// ========== success notification using antD===========
        // notification.success({
        //   message: "Welcome Back",
        //   description: "All users fetched successfully",
        //   duration: 2,
        // });
        setLoading(false);
      } catch (error) {
// ========== Error notification using antD=============       
        notification.error({
          message: "Failed to fetch users",
          description: error.message,
          duration: 2,
        });
        console.log(error);
        setLoading(false)
      }
    };
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading }}>
      {children}
    </UserContext.Provider>
  );
};
