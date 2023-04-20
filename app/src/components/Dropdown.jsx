import { useEffect, useState } from "react";
import '../css/dropdown.css';


function Dropdown(props) {
	const [selected, setSelected] = useState('');
	const [open, setOpen] = useState(false);

	useEffect(() => setSelected(props.select.name), [props.select])

	const toggleOpen = () => {
		setOpen(!open);
	}

	const handleSelect = (item) => {
		setSelected(item.name);
		setOpen(false);
		props.onSelect(item);
	} 

	const items = props.items.map((i, idx) => (<li key={idx} className='dropdown-item' onClick={() => handleSelect(i)}>{i.name}</li>));

	return (<div className='dropdown'>
		<div className='dropdown-top'>
			<div>{selected}</div>
			<button onClick={toggleOpen}><i class="arrow a-down"></i></button>
		</div>
		{open ? <ul>{items}</ul> : null}
	</div>)
}

export default Dropdown;