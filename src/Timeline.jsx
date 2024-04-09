import TweetEditor from "./composants/TweetEditor/TweetEditor.jsx";
import Header from "./composants/Header/Header.jsx";
import Tweets from "./composants/Tweets/tweets.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import './style.css';
// import Searchbox from "./searchbox/searchbox.jsx";
function Timeline() {
  return (
    <>
      <div></div>
      <Sidebar/>
      <div className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </div>
      <div></div>
    </>
  );
}
export default Timeline;
