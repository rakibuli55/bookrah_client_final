// LiveChatModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiX, FiMic, FiPaperclip, FiSmile } from 'react-icons/fi';

const LiveChatModal = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "I am looking for account takeover protection for Microsoft365, for a company with about 1000 employees.", sender: "user", time: "10:32 AM" },
        { id: 2, text: "I can suggest you several options when you can fulfill your requirements.", sender: "agent", time: "10:33 AM" },
        { id: 3, text: "Great! Please share the top 3 solutions with pricing.", sender: "user", time: "10:34 AM" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Fake agent reply after user sends message
    useEffect(() => {
        if (messages[messages.length - 1]?.sender === "user") {
            setIsTyping(true);
            const timer = setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: prev.length + 1,
                    text: "Here are our top recommendations:\n1. SilverFort ($8/user/month)\n2. Beyond Identity ($12/user/month)\n3. Okta Identity Threat Protection ($15/user/month)\n\nWould you like a free trial?",
                    sender: "agent",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
                setIsTyping(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: input,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInput("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed right-4 bottom-4 w-[340px] md:w-[440px] h-[450px]  md:h-[580px] bg-white rounded-3xl shadow-2xl overflow-hidden z-50 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-primary text-white p-2 md:p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                        <h3 className="font-semibold text-lg">Live Chat</h3>
                        <p className="text-xs opacity-90">Typically replies in 2 mins</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 cursor-pointer rounded-full hover:bg-white/20 flex items-center justify-center transition"
                >
                    <FiX className="text-xl" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-5 space-y-4 bg-gray-50">
                {messages.map(msg => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[90%] px-2 md:px-4 py-3 rounded-2xl shadow-sm ${msg.sender === "user"
                                ? "bg-primary text-white rounded-tr-none"
                                : "bg-white text-gray-800 rounded-tl-none border border-gray-200"
                                }`}
                        >
                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-amber-100" : "text-gray-400"}`}>
                                {msg.time}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-200">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className=" md:p-4 p-3 bg-white border-t">
                <div className="flex gap-2">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message here..."
                        rows={1}
                        className="flex-1 resize-none outline-none text-sm px-4 py-3 bg-gray-100 rounded-full focus:bg-gray-50 border border-gray-200 transition"
                    />
                    <button
                        onClick={sendMessage}
                        className="w-12 h-12 cursor-pointer bg-primary hover:bg-bg-primary/80 text-white rounded-full flex items-center justify-center transition transform hover:scale-110"
                    >
                        <FiSend className="text-lg" />
                    </button>
                </div>

                {/* Toolbar */}
                <div className="flex justify-between items-center hidden mt-3 px-2">
                    <div className="flex gap-4 text-gray-400">
                        <button className="hover:text-amber-500 transition"><FiMic /></button>
                        <button className="hover:text-amber-500 transition"><FiPaperclip /></button>
                        <button className="hover:text-amber-500 transition"><FiSmile /></button>
                    </div>
                    <p className="text-xs text-gray-400">Powered by SecureChat AI</p>
                </div>
            </div>
        </div>
    );
};

export default LiveChatModal;