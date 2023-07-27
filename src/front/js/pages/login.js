import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
                <input type="text" />
                <input type="password" />
                <button>Login</button>
            </div>
		</div>
	);
};
