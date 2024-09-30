import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import "./CreateUserForm.scss";
import GreenButton from "../common/GreenButton";

const CreateUserForm = () => {
  const navigate = useNavigate();

  const { users, setUsers } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePhone = (phone) => {
    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      notification.error({
        message: "Error",
        description: "Please enter a valid phone number (10 digits).",
      });
      return;
    }
    setLoading(true);
    try {
      //========== POST reQuest
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData
      );
      const newUser = response.data;
      // =======success notification===========
      notification.success({
        message: "Success",
        description: "User created successfully!",
      });

      // ==========updating the list in userContext locally====
      setUsers([...users, newUser]);

      setFormData({ name: "", email: "", phone: "" });
      //========= back to user list page
      navigate("/");
    } catch (error) {
      // =======error notification===========
      notification.error({
        message: "Error",
        description: "Failed to create user. Please try again.",
      });
      console.error("Error creating user:", error);
    } finally {
      setLoading(false); //========= Stop loading
    }
  };

  return (
    <div className="userForm_container">
      <div className="dashboard_card">
        <div className="form_header">
          <h2>Create User</h2>
         <GreenButton/>
        </div>

        {/*======= Form for Creating a User ============*/}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
