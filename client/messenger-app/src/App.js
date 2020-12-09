import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
      axios.get('/messages/sync').then(response => {
        console.log(response.data);
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('e49696d1456791ae2abf', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
      <Sidebar />
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
