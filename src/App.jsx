import './App.css'
import Header from "./component/header/header.jsx"
import Tweeteditor from "./component/body/tweet-editor.jsx"

export default function Timeline() {
    return (<div className="timeline">
        <Header/>
        <Tweeteditor/>
    </div>)
}
