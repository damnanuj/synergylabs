import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './UserInfo.scss';
import { UserContext } from '../../Context/UserContext';
import profile from "../../assests/profilemale.png"
import GreenButton from '../common/GreenButton';

const UserInfo = () => {
  const { id } = useParams(); //==> ID from the URL
  const { users } = useContext(UserContext);//useCOntext


  //===== Finding the user based on the ID===========
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div className="userInfo_container">
      <div className="userInfo_box">
        <div className="form_header">
          <h2>User Details</h2>
          {/* custom green button  */}
          <GreenButton/>  
        </div>
        {user ? (
          <div className="userDetails">
            <img src={profile}></img>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ) : (
          <p>User not found.</p> // Message if the user is not found
        )}
      </div>
    </div>
  );
};

export default UserInfo;
