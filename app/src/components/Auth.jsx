import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";

function Auth(props) {
	const {auth} = useContext(AuthContext);

	console.log('auth: ' + auth)

	if (props.loading) {
		return <h1>Loading...</h1>
	}

	return <>{ auth ? props.children :  <Navigate to="/login" /> }</>
}

export default Auth;