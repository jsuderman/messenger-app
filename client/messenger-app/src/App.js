import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat"

function App() {
  return (
    <div className="app">
      

      {/* sidebar component */}
      <Sidebar />
      {/* chat component  */}
      <Chat />



    </div>
  );
}

export default App;
