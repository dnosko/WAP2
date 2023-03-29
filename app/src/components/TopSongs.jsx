import ArrowButton from "./ArrowButton";
import Auth from "./Auth";

export function TopSongs(props) {
  return (
	<Auth>
		<div className='App'>
		<a href='/welcome'></a>
		<h1>Hi</h1>
		<div className='bottom'>
			<ArrowButton link='/welcome' direction='left'></ArrowButton>
			<ArrowButton link='' direction='right'></ArrowButton>
		</div>
		</div>
	</Auth>
  );
}
