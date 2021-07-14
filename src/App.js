import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
// Components
import ChannelBar from './components/ChannelBar';
import ChatSection from './components/ChatSection';
import MemberBar from './components/MemberBar';
import UserLogin from './components/UserLogin';

function App() {
  // State responsible for tracking user name
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <UserLogin setUserName={setUser} />
      ) : (
        <div className="container">
          <Router>
            <Switch>
              <Route path="/channels/:channelID">
                <ChannelBar />
                <ChatSection />
                <MemberBar />
              </Route>
              <Route exact path="/">
                <ChannelBar />
                <ChatSection />
                <MemberBar />
              </Route>
            </Switch>
          </Router>
        </div>
      )
      }
    </div>
  );
}

export default App;