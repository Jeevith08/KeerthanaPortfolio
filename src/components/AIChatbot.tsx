import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Keerthana's assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  const predefinedResponses: { [key: string]: string } = {
    'hello': "Hello! Nice to meet you. What would you like to know about Keerthana?",
    'hi': "Hi there! How can I assist you today?",
    'experience': "Keerthana is a fullstack developer with experience in Java and the MERN stack.",
    'skills': "Key skills: Java, React, Node.js, MongoDB, UI/UX, HTML/CSS, JavaScript.",
    'projects': "Mini projects include Stock Trend Predictor, Library Management System (Java), IoT theft & motion detection, and an underground cable fault detector.",
    'contact': "You can reach Keerthana at keerthanasubbu5@gmail.com.",
    'location': "Based in Coimbatore, India.",
    'availability': "Currently available for opportunities and collaborations."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return "That's a great question! For more details, please contact Keerthana via the contact section or email.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
          isDark 
            ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
            : 'bg-white/80 hover:bg-white/90 border border-pink-200'
        } shadow-lg backdrop-blur-sm`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? (
          <X size={18} className={isDark ? 'text-white' : 'text-pink-500'} />
        ) : (
          <Bot size={18} className={isDark ? 'text-white' : 'text-pink-500'} />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-24 right-6 z-40 w-80 h-96 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl ${
              isDark 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/80 border border-pink-100'
            }`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className={`p-3 border-b ${
              isDark 
                ? 'border-white/20 bg-white/5' 
                : 'border-pink-100 bg-white/70'
            }`}>
              <div className="flex items-center space-x-2">
                <div className={`p-1 rounded-full ${
                  isDark 
                    ? 'bg-white/10' 
                    : 'bg-pink-100'
                }`}>
                  <Bot size={14} className={isDark ? 'text-white' : 'text-pink-500'} />
                </div>
                <div>
                  <h3 className={`font-semibold text-[11px] ${
                    isDark ? 'text-white' : 'text-pink-500'
                  }`}>AI Assistant</h3>
                  <p className={`text-[10px] ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>Online now</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-3 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-end space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`p-1 rounded-full ${
                      isDark 
                        ? message.isBot ? 'bg-white/10' : 'bg-pink-500/20'
                        : message.isBot ? 'bg-pink-100' : 'bg-pink-50'
                    }`}>
                      {message.isBot ? (
                        <Bot size={12} className={isDark ? 'text-white' : 'text-pink-500'} />
                      ) : (
                        <User size={12} className={isDark ? 'text-white' : 'text-pink-500'} />
                      )}
                    </div>
                    <div className={`px-2 py-1 rounded-2xl ${
                      message.isBot 
                        ? isDark 
                          ? 'bg-white/10 text-white' 
                          : 'bg-white/80 text-gray-700'
                        : isDark
                          ? 'bg-pink-500/20 text-white'
                          : 'bg-pink-100 text-pink-600'
                    }`}>
                      <p className="text-xs">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-end space-x-2">
                    <div className={`p-1 rounded-full ${
                      isDark ? 'bg-white/10' : 'bg-pink-100'
                    }`}>
                      <Bot size={12} className={isDark ? 'text-white' : 'text-pink-500'} />
                    </div>
                    <div className={`px-2 py-1 rounded-2xl ${
                      isDark ? 'bg-white/10' : 'bg-white/80'
                    }`}>
                      <div className="flex space-x-1">
                        <div className={`w-1.5 h-1.5 rounded-full animate-bounce ${
                          isDark ? 'bg-white/60' : 'bg-gray-400'
                        }`}></div>
                        <div className={`w-1.5 h-1.5 rounded-full animate-bounce ${
                          isDark ? 'bg-white/60' : 'bg-gray-400'
                        }`} style={{ animationDelay: '0.1s' }}></div>
                        <div className={`w-1.5 h-1.5 rounded-full animate-bounce ${
                          isDark ? 'bg-white/60' : 'bg-gray-400'
                        }`} style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-3 border-t ${
              isDark 
                ? 'border-white/20 bg-white/5' 
                : 'border-pink-100 bg-white/70'
            }`}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`flex-1 px-2 py-1 rounded-lg text-xs transition-colors ${
                    isDark
                      ? 'bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-white/40'
                      : 'bg-white/60 text-gray-700 placeholder-gray-400 border border-pink-200 focus:border-pink-400'
                  } focus:outline-none`}
                />
                <motion.button
                  onClick={handleSend}
                  className={`p-2 rounded-lg transition-all ${
                    isDark
                      ? 'bg-pink-500/80 hover:bg-pink-500 text-white'
                      : 'bg-pink-500 hover:bg-pink-600 text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                >
                  <Send size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
