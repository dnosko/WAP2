import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
	const initVal = localStorage.getItem('token') ? true : false;
	const [auth, setAuth] = useState(initVal);

	function setState(val) {
		setAuth(val);
	}

	return <AuthContext.Provider value={{auth, setState}}>
		{props.children}
	</AuthContext.Provider>;
}

export default AuthProvider;
export {AuthContext};