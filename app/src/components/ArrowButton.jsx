import { useNavigate } from "react-router-dom";
import "../css/App.css";

export default function ArrowButton({ direction, link }) {
 	let navigate = useNavigate();
	
	const routeChange = () => {
	    navigate(link);
	};

    return (
      <button onClick={routeChange}>
        {direction == 'right' ? '»' : '«'}
      </button>
    );
}
