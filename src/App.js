import './App.css';

//Components
import ChannelBar from './components/ChannelBar';
import ChatSection from './components/ChatSection';
import MemberBar from './components/MemberBar';

function App() {
  return (
    <div className="App">
      {/* Container for JIRC*/}
      <div className="container">
        <ChannelBar />
        <ChatSection />
        <MemberBar />
      </div>
    </div>
  );
}

export default App;
