import React from "react";
import { Spin } from "antd";
import './Loader.scss'; 

const Loader = () => (
  <div className="loader-container">
    {/* antD Loader component*/}
    <Spin size="large" />
  </div>
);

export default Loader;