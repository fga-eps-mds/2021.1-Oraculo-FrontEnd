import React from "react";
import { logout } from "../../Auth/Auth";
import MainButton from "../../Components/MainButton";
import { history } from "../../history";

const AdminScreen = () => {
  function handleClickCheckout() {
    logout();
    history.push("/login");
    window.location.reload();
  }

  function handleProcess() {
    history.push("/criar-processo");
    window.location.reload();
  }

  function handleViewProfile() {
    history.push("/user");
    window.location.reload();
  }

  function handleViewCreateProfile() {
    history.push("/criar-usuario");
    window.location.reload();
  }

  function handleChangePassword() {
    history.push("/change-password");
    window.location.reload();
  }

  return (
    <>
      <div>Voce esta logado como ADMIN</div>
      <MainButton title="criar registro" onClick={handleProcess} />
      <MainButton title="logout" onClick={handleClickCheckout} />
      <MainButton title="ver usuario" onClick={handleViewProfile} />
      <MainButton title="criar usuario" onClick={handleViewCreateProfile} />
      <MainButton title="alterar senha" onClick={handleChangePassword} />
    </>
  );
};
export default AdminScreen;
