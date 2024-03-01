import TweetEditor from "./composants/TweetEditor/TweetEditor.jsx";
import Header from "./composants/Header/Header.jsx";
import Tweets from "./composants/Tweets/tweets.jsx";
function Timeline() {
  return (
    <>
      <div></div>
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
