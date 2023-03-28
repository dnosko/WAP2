import ArrowButton from './ArrowButton';
import { useAuth } from '../userauth'

export function TopSongs(props) {
    let access_token = useAuth()
    return (
        <div className="App">
            <a href="/welcome">
            </a>
            { access_token == null ?  <h1>Not granted</h1> : <h1>Hi</h1> }
            <div className="bottom">
                <ArrowButton link="/welcome" direction="left"></ArrowButton>
                <ArrowButton link="" direction="right"></ArrowButton>
            </div>
        </div>
    )
}