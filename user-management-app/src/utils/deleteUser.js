import { Modal, notification } from "antd";

export const deleteUser = (id, users, setUsers) => {
  //=======antD model to confirmation pop-up==========
  Modal.confirm({
    title: "Are you sure you want to delete this user?",
    okText: "Yes",
    cancelText: "No",
    onOk: () => {
      setUsers(users.filter((user) => user.id !== id));
      notification.success({
        message: "User Deleted",
        description: "The user has been successfully deleted.",
        duration:70
      });
    },
    onCancel: () => {
      notification.info({
        message: "Delete Cancelled",
        description: "User deletion has been cancelled.",
      });
    },
  });
};
