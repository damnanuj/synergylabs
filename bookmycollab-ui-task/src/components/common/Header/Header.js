import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import PurpleButton from "../Button/PurpleButton";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <header className="header_container">
      <h2>BookMyCollab</h2>

      <div className="nav_list_items">
        <a href="/">What we Do</a>
        <a href="/">How it works</a>
        <a href="/">Join us as Brand</a>
        <a href="/">Join us as Creator</a>
        <PurpleButton text={"Login"} />
      </div>

      {/* Mobile Menu Button */}
      <Button className="menuBtn" type="primary" onClick={showDrawer}>
        <MenuOutlined />
      </Button>

      {/* Mobile Drawer */}
      <Drawer title="close" placement="right" onClose={closeDrawer} open={open}>
        <div className="nav_list_items">
          <a href="/">What we Do</a>
          <a href="/">How it works</a>
          <a href="/">Join us as Brand</a>
          <a href="/">Join us as Creator</a>
          <PurpleButton text={"Login"} />
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
