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

	function handleViewProfile(){
		history.push("/user");
		window.location.reload();
	}

	return (
		<>
			<div>Voce esta logado como ADMIN</div>
			<MainButton title="criar processo" onClick={handleProcess} />
			<MainButton title="logout" onClick={handleClickCheckout} />
			<MainButton title="ver usuario" onClick={handleViewProfile} />
		</>
	);
};
export default AdminScreen;
