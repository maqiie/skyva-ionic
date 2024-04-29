// // ChatComponent.js
// import React, { useState, useEffect } from 'react';
// import openSocket from 'socket.io-client';

// const socket = openSocket('http://localhost:3000/cable'); // Replace with your backend URL

// function ChatComponent() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     // Handle incoming messages
//     socket.on('chat_channel', (data) => {
//       setMessages([...messages, data]);
//     });

//     return () => {
//       // Cleanup: Disconnect socket when component unmounts
//       socket.disconnect();
//     };
//   }, [messages]);

//   const sendMessage = () => {
//     // Send message to the backend
//     socket.emit('chat_channel', { message: newMessage });

//     // Clear the input field
//     setNewMessage('');
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>{msg.message}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default ChatComponent;



// ChatComponent.js
// import React, { useState, useEffect } from 'react';
// import openSocket from 'socket.io-client';

// // const socket = openSocket('http://localhost:3000/cable'); // Replace with your backend URL
// const cable = ActionCable.createConsumer('ws://localhost:3000/cable');

// function ChatComponent() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch the logged-in user's information when the component mounts
//     fetch('http://localhost:3000/current_user', {
//       method: 'GET',
//       credentials: 'include', // Include credentials (cookies) in the request
//     })
//       .then((response) => response.json())
//       .then((userData) => {
//         setUser(userData);
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });

//     // Handle incoming messages
//     socket.on('chat_channel', (data) => {
//       setMessages([...messages, data]);
//     });

//     return () => {
//       // Cleanup: Disconnect socket when component unmounts
//       socket.disconnect();
//     };
//   }, [messages]);

//   const sendMessage = () => {
//     // Send message to the backend with user information
//     socket.emit('chat_channel', { message: newMessage, name: user.name, admin: user.admin });

//     // Clear the input field
//     setNewMessage('');
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>{msg.message}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default ChatComponent;
import React, { useState, useEffect } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000/cable');

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's information when the component mounts
    fetch('http://localhost:3000/current_user', {
      method: 'GET',
      credentials: 'include', // Include credentials (cookies) in the request
    })
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Handle incoming messages
    socket.on('chat_channel', (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      // Cleanup: Disconnect socket when the component unmounts
      socket.disconnect();
    };
  }, [messages]);

  const sendMessage = () => {
    // Send message to the backend with user information
    socket.emit('chat_channel', { message: newMessage, name: user.name, admin: user.admin });

    // Clear the input field
    setNewMessage('');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow">
      <div className="mb-4 max-h-48 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 bg-blue-100 rounded">
            <strong className="text-blue-800">{msg.name}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded outline-none"
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatComponent;
