import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './UserInfo.scss';
import { UserContext } from '../../Context/UserContext';
import profile from "../../assests/profilemale.png"
import GreenButton from '../common/GreenButton';
import Loader from '../common/Loader/Loader';

const UserInfo = () => {
  const { id } = useParams(); //==> ID from the URL
  const { users,loading } = useContext(UserContext);//useCOntext


  //===== Finding the user based on the ID===========
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div className="userInfo_container">
      <div className="dashboard_card">
        <div className="form_header">
          <h2>User Details</h2>
          {/* custom green button  */}
          <GreenButton/>  
        </div>
        {user ? (
          <div className="userDetails">
            <img src={profile} alt='profilePic'/>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ) : (
          <p style={{textAlign:"center"}}>User not found.</p> //if the user is not found
        )}
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

export default UserInfo;
