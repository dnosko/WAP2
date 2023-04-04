import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
	const [auth, setAuth] = useState(false);

	function setState(val) {
		setAuth(val);
	}

	return <AuthContext.Provider value={{auth, setState}}>
		{props.children}
	</AuthContext.Provider>;
}

export default AuthProvider;
export {AuthContext};