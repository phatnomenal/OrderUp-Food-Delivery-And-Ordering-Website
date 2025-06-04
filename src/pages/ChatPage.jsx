import React, { useState } from 'react';
import ChatList from '../components/chat/ChatList';
import ChatWindow from '../components/chat/ChatWindow';

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ height: '600px' }}>
        <div className="flex h-full">
          {/* Chat List */}
          <div className="w-1/3 border-r border-gray-200">
            <ChatList 
              selectedChat={selectedChat}
              onChatSelect={setSelectedChat}
            />
          </div>
          
          {/* Chat Window */}
          <div className="flex-1">
            {selectedChat ? (
              <ChatWindow chat={selectedChat} />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <p>Chọn một cuộc trò chuyện để bắt đầu</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
