import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Muhammad-Rafeh'
			userSecret='104056'
      projectID='cc323a82-63b0-4ce7-9d38-611e79d290af'
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
		/>
	);
}

export default App;
