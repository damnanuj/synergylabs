import React from "react";
import Header from "../components/common/Header/Header";
import CreateUserFormm from "../components/CreateUserForm/CreateUserForm";

const EditUser = () => {
  return (
    <>
      <Header />
      <CreateUserFormm isEditMode={true} />
      {/* using the createUser Form component but 
      as editable one isEditMode as true */}
    </>
  );
};

export default EditUser;
