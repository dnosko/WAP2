import ArrowButton from './ArrowButton';

export function TopSongs(props) {
    return (
        <div className="App">
            <a href="/welcome">
            </a>
            { props.access_token == null ?  <h1>Not granted</h1> : <h1>Hi</h1> }
            <div className="bottom">
                <ArrowButton link="/welcome" direction="left"></ArrowButton>
                <ArrowButton link="" direction="right"></ArrowButton>
            </div>
        </div>
    )
}