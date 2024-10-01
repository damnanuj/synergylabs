import { message, Modal } from "antd";
import React, { useState } from "react";

export const deleteUser = (id, users, setUsers) => {

  //=======antD model to confirmation pop-up==========
  Modal.confirm({
    title: "Are you sure you want to delete this user?",
    okText: "Yes",
    cancelText: "No",
    onOk: () => {
      setUsers(users.filter((user) => user.id !== id));
      message.open({
        type: 'success',
        content: 'The user has been successfully deleted.',
        duration: 2,
       
      });
    },
    onCancel: () => {
      message.open({
        type: 'info',
        content: 'User deletion has been cancelled.',
        duration: 2,
       
      });
    },
  });

};
