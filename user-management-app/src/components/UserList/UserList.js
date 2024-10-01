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
          {/* custom button with 2 props dynamically */}
          <GreenButton text="Create user" route="/create-user" />
        </div>

        <div className="table_container">
          <table>
            <thead>
              <tr>
                <th>S.N.</th>
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
                    <td data-label="S.N.">{index + 1}</td>
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Phone">{user.phone}</td>
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
                  {/* Showing no data if no users is present/ arr.length===0 */}
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
