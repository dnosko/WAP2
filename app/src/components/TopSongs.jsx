
export function TopSongs(props) {
    return (
        <div className="App">
            <a href="/welcome">
            </a>
            { props.access_token == null ?  <h1>Not granted</h1> : <h1>Hi</h1> }
            <div className="bottom">
                <a href="/welcome" className="click left">«</a>
                <a className="click right">»</a>
            </div>
        </div>
    )
}