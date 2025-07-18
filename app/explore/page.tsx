'use client';

import { useState } from 'react';
import Link from 'next/link';
import Globe from '../components/Globe';
import FeedModal from '../components/FeedModal';
import EducationalPanel from '../components/EducationalPanel';
import { type OceanFeed } from '../data/oceanFeeds';

export default function ExplorePage() {
  const [selectedFeed, setSelectedFeed] = useState<OceanFeed | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEducationalPanel, setShowEducationalPanel] = useState(false);

  const handleFeedSelect = (feed: OceanFeed) => {
    setSelectedFeed(feed);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeed(null);
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                Ocean<span className="text-cyan-400">Eye</span>
              </Link>
              <span className="hidden sm:block text-blue-200 text-sm sm:text-base">Explore Live Ocean Feeds</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base">
                <span className="sm:hidden">🏠</span>
                <span className="hidden sm:inline">🏠 Home</span>
              </Link>
              <Link href="/learn" className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base">
                <span className="sm:hidden">📚</span>
                <span className="hidden sm:inline">📚 Learn</span>
              </Link>
              <button
                onClick={() => setShowEducationalPanel(!showEducationalPanel)}
                className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base"
              >
                <span className="sm:hidden">ℹ️</span>
                <span className="hidden sm:inline">ℹ️ Info Panel</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-full pt-16 sm:pt-20 flex flex-col md:flex-row">
        {/* Globe Container - Hidden on mobile when panel is open */}
        <div className={`transition-all duration-300 ${
          showEducationalPanel
            ? 'hidden md:block md:w-2/3 md:h-full'
            : 'w-full h-full'
        }`}>
          <Globe onFeedSelect={handleFeedSelect} />
        </div>

        {/* Educational Panel - Mobile: Full screen overlay, Desktop: Sidebar */}
        <div className={`transition-all duration-300 ${
          showEducationalPanel
            ? 'w-full h-full md:w-1/3 md:h-full'
            : 'w-0 h-0 md:w-0'
        } overflow-hidden`}>
          <div className="h-full p-3 sm:p-4 relative">
            {/* Mobile close button */}
            <button
              onClick={() => setShowEducationalPanel(false)}
              className="md:hidden absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <EducationalPanel className="h-full overflow-y-auto" />
          </div>
        </div>
      </div>

      {/* Instructions Overlay - Hide on mobile when educational panel is open or when bottom instructions are visible */}
      <div className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-white max-w-xs sm:max-w-sm transition-opacity duration-300 ${
        showEducationalPanel ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto'
      }`}>
        <h3 className="font-semibold mb-2 text-sm sm:text-base">How to Explore</h3>
        <ul className="text-xs sm:text-sm space-y-1">
          <li>🎯 Tap cyan markers to view live feeds</li>
          <li className="hidden sm:list-item">📚 Click &quot;Learn&quot; to explore ocean education</li>
          <li>🌊 Discover ocean life from around the world</li>
        </ul>
      </div>

      {/* Feed Modal */}
      <FeedModal
        feed={selectedFeed}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
