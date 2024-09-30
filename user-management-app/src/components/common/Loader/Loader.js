import React from "react";
import { Spin } from "antd";
import './Loader.scss'; 

const Loader = () => (
  <div className="loader-container">
    <Spin size="large" />
  </div>
);

export default Loader;