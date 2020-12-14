import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login"
import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";
import axios from "./axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      // console.log(response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('e49696d1456791ae2abf', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  // console.log(messages);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <div className="app__body">

            <Router>
            <Sidebar />
              <Switch>
              
                <Route path="/">
                  <Chat messages={messages} />
                </Route>

                <Route path="/rooms/:roomId">
                  <Chat messages={messages} />
                </Route>

              </Switch>
            </Router>

          </div>
        )}

    </div>
  );
}

export default App;
