import './App.css';
import {Chat} from './ChatComponent';
import conversationExample from './sampleConversation.json';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Chat conversation={conversationExample}> 

        </Chat>
      </div>
    </div>
  );
}

export default App;
