import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState, useEffect } from 'react';
import db from './firebase';
// Components
import ChannelBar from './components/ChannelBar';
import ChatSection from './components/ChatSection';
import MemberBar from './components/MemberBar';
import UserLogin from './components/UserLogin';

function App() {
  // State responsible for tracking user name
  const [user, setUser] = useState(null);
  const [initialChannel, setInitialChannel] = useState([]);

  useEffect(() => {
    db.collection("channels").limit(1).get().then((querySnapshot) => {
      setInitialChannel(querySnapshot.docs[0].id);
    });
  }, [user]);

  return (
    <div className="App">
      {!user ? (
        <UserLogin setUserName={setUser} />
      ) : (
        <div className="container">
          <Router>
            <Redirect to={`/channels/${initialChannel}`} />
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