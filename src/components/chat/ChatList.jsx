import React from 'react';

const ChatList = ({ selectedChat, onChatSelect }) => {
  const chats = [
    {
      id: 1,
      name: 'Nanica Homemade Pies',
      lastMessage: 'Đơn hàng của bạn đang được chuẩn bị',
      time: '10:30',
      unread: 2,
      avatar: 'https://placehold.co/40x40/22c55e/ffffff?text=N'
    },
    {
      id: 2,
      name: 'Phở Hà Nội',
      lastMessage: 'Cảm ơn bạn đã đặt hàng!',
      time: '09:15',
      unread: 0,
      avatar: 'https://placehold.co/40x40/22c55e/ffffff?text=P'
    },
    {
      id: 3,
      name: 'Burger House',
      lastMessage: 'Shipper đang trên đường giao hàng',
      time: 'Hôm qua',
      unread: 1,
      avatar: 'https://placehold.co/40x40/22c55e/ffffff?text=B'
    }
  ];

  return (
    <div className="h-full">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">Tin nhắn</h2>
      </div>
      
      <div className="overflow-y-auto">
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => onChatSelect(chat)}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
              selectedChat?.id === chat.id ? 'bg-green-50 border-green-200' : ''
            }`}
          >
            <div className="flex items-center">
              <img 
                src={chat.avatar} 
                alt={chat.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 ml-2">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
