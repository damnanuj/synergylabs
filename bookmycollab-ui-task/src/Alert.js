import { Alert } from "antd";
import React from "react";

const AlertMsg = () => {
  return (
    <div
      style={{
         width: "200px",
        height: "100px",
        position: "absolute",
        left: "20px",
        top: "80px",
        zIndex: 1000,
        
      }}
    >
      <Alert
       
       message="This Project is still being developed."
        type="warning"
        showIcon
        className="blinking-alert"
        style={{fontSize:"10px"}}
      />
    </div>
  );
};

export default AlertMsg;