import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { message, notification } from "antd";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import "./CreateUserForm.scss";
import GreenButton from "../common/GreenButton";

const CreateUserForm = ({ isEditMode }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // fetching id if in edit mode
  const { users, setUsers } = useContext(UserContext);

  //====== collecting form data here======
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  //========= Fetch user data if editing ==============
  useEffect(() => {
    if (isEditMode && id) {
      const userToEdit = users.find((user) => user.id === parseInt(id));
      if (userToEdit) {
        setFormData(userToEdit); //>>> Pre-fill the form with user data
      }
    }
  }, [isEditMode, id, users]);

  // >>>spreading out the data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Basic validation for 10-digit phone number
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Email before submitting
    if (!validateEmail(formData.email)) {
      message.open({
        type: "error",
        content: "Please enter a valid email address",
        duration: 2,
      });
      return;
    }
    // Validate phone number before submitting
    if (!validatePhone(formData.phone)) {
      message.open({
        type: "error",
        content: "Please enter a valid phone number (10 digits).",
        duration: 2,
      });
      return;
    }

    setLoading(true); // Start loading state
    try {
      let response;

      if (isEditMode) {
        // Update user logic
        response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          formData
        );

        // Update local user context with the edited data
        setUsers(
          users.map((user) =>
            user.id === parseInt(id) ? { ...user, ...formData } : user
          )
        );
        message.open({
          type: "success",
          content: "User updated successfully!",
          duration: 2,
        });
      } else {
        //======== Create new user========
        response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          formData
        );

        //============ new user to context locally
        setUsers([...users, response.data]);

        message.open({
          type: "success",
          content: "User created successfully!",
          duration: 2,
        });
      }

      setFormData({ name: "", email: "", phone: "" });
      navigate("/"); //====> back to home=====
    } catch (error) {
      message.open({
        type: "error",
        content:
          "Failed to create user. " + error.message + " Please try again.",
        duration: 2,
      });

      console.error("Error:", error);
    } finally {
      setLoading(false); //loading state false updating
    }
  };

  return (
    <div className="userForm_container">
      <div className="dashboard_card">
        <div className="form_header">
          <h2>{isEditMode ? "Edit User" : "Create User"}</h2>
          <GreenButton />
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name} //=> input values if its in creation it'll be empty initially
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

          {/* =====disabling the button if the loading is true to avoid multiple clicks */}
          <button type="submit" disabled={loading}>
            {/* update or create button text based on condition  */}
            {loading ? "Processing..." : isEditMode ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
