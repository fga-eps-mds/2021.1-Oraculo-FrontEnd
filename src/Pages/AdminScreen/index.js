import React from "react";
import MainButton from "../../Components/MainButton";
import { logout } from "../../Auth/Auth";
import { history } from "../../history";

const AdminScreen = () => {
  const handleClickCheckout = (event) => {
    logout();
    history.push("/login");
  };
  return (
    <>
      <div>Voce esta logado como ADMIN</div>
      <MainButton title="logout" onClick={handleClickCheckout} />
    </>
  );
};
export default AdminScreen;
