'use client';

import { useState } from 'react';

export default function ContactButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:jonmoore9000@gmail.com';
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jonmoore9000@gmail.com');
      // Could add a toast notification here if desired
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      {/* Main Contact Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-2 shadow-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium"
        style={{ minWidth: '44px', minHeight: '44px' }}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="hidden sm:inline">Contact</span>
      </button>

      {/* Expanded Email Panel */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsExpanded(false)}
          />
          
          {/* Email Panel */}
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[280px] animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">jonmoore9000@gmail.com</span>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleEmailClick}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Send Email
                </button>
                <button
                  onClick={copyEmail}
                  className="px-3 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-md text-sm font-medium transition-colors"
                  title="Copy email address"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-2">
                Questions about OceanEye? Feedback? Just want to chat about marine life? Drop me a line!
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
