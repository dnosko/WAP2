import '../css/App.css'

export default  function ArrowButton({ direction, link }) {
    if (direction == 'right') {
        return <a href={link} className="click right" >»</a>
    }
    else
        return <a href={link} className="click left">«</a>
}

