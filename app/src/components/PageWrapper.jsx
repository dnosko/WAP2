import ArrowButton from "./ArrowButton";
import Auth from "./Auth";
import Logout from "./Logout";


function PageWrapper(props) {
	return (
		<Auth>
			<Logout darkMode={false} />
			{props.children}
			<div className='bottom'>
				<ArrowButton link={props.left} direction='left'></ArrowButton>
				<ArrowButton link={props.right} direction='right'></ArrowButton>
			</div>
		</Auth>
	)
}

export default PageWrapper;