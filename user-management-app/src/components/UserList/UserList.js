import React, { useContext } from "react";
import "./UserList.scss";
import { UserContext } from "../../Context/UserContext";
import Loader from "../common/Loader/Loader";
import { Link } from "react-router-dom";
import { deleteUser } from "../../utils/deleteUser";
import GreenButton from "../common/GreenButton";

const UserList = () => {
  const { users, loading, setUsers } = useContext(UserContext);

  return (
    <div className="userList_container uni_padding">
      <div className="dashboard_card">
        <div className="create_user">
          <h2>Manage Users</h2>
          <GreenButton text="Create user" route="/create-user" />
        </div>

        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="actions">
        {/* =========View user Details icon========= */}
                      <Link to={`/user-details/${user.id}`}>
                        <span className="material-icons view">visibility</span>
                      </Link>
        {/* =========Edit user Details icon========= */}              
                      <Link to={`/edit-user/${user.id}`}>
                        <span className="material-icons edit">edit_square</span>
                      </Link>
        {/* =========Delete user Details icon========= */}              
                      <span
                        className="material-icons delete"
                        onClick={() => deleteUser(user.id, users, setUsers)}
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {loading && (
          <>
            <div className="loading-message">
              <Loader />
            </div>
            <div style={{ height: "100px" }}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
