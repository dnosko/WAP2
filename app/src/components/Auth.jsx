import { useAuth } from "./hooks/useAuth";

function Auth(props) {

	return <>{ props.authenticated ? props.children :  <h1>Access not granted!</h1> }</>
}

export default Auth;