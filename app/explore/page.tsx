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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                Ocean<span className="text-cyan-400">Eye</span>
              </Link>
              <span className="text-blue-200">Explore Live Ocean Feeds</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
                🏠 Home
              </Link>
              <Link href="/learn" className="text-white hover:text-cyan-400 transition-colors">
                📚 Learn
              </Link>
              <button
                onClick={() => setShowEducationalPanel(!showEducationalPanel)}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                ℹ️ Info Panel
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-full pt-20 flex">
        {/* Globe Container */}
        <div className={`transition-all duration-300 ${showEducationalPanel ? 'w-2/3' : 'w-full'}`}>
          <Globe onFeedSelect={handleFeedSelect} />
        </div>

        {/* Educational Panel Sidebar */}
        <div className={`transition-all duration-300 ${showEducationalPanel ? 'w-1/3' : 'w-0'} overflow-hidden`}>
          <div className="h-full p-4">
            <EducationalPanel className="h-full overflow-y-auto" />
          </div>
        </div>
      </div>

      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white max-w-sm">
        <h3 className="font-semibold mb-2">How to Explore</h3>
        <ul className="text-sm space-y-1">
          <li>🎯 Click on cyan markers to view live feeds</li>
          <li>📚 Click &quot;Learn&quot; to explore ocean education</li>
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
