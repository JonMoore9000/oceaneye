'use client';

import { useEffect } from 'react';
import { type OceanFeed } from '../data/oceanFeeds';

interface FeedModalProps {
  feed: OceanFeed | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeedModal({ feed, isOpen, onClose }: FeedModalProps) {

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !feed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Mobile optimized */}
      <div className="relative w-full max-w-6xl bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-2xl font-bold text-white pr-4 leading-tight">
            {feed.name}
          </h3>
          <button
            type="button"
            className="rounded-md bg-white/10 p-2 text-white hover:bg-white/20 transition-colors flex-shrink-0"
            onClick={onClose}
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-lg overflow-hidden bg-black mb-3 sm:mb-4">
              <iframe
                src={feed.stream_url}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={feed.name}
              ></iframe>
            </div>

            {/* Stream Info */}
            <div className="bg-white/10 rounded-lg p-3 sm:p-4">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Stream Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div>
                  <span className="text-blue-300 font-medium">Location:</span>
                  <p className="text-white">{feed.region}</p>
                </div>
                <div>
                  <span className="text-blue-300 font-medium">Depth:</span>
                  <p className="text-white">{feed.depth}</p>
                </div>
                <div>
                  <span className="text-blue-300 font-medium">Source:</span>
                  <p className="text-white">{feed.source}</p>
                </div>
                <div>
                  <span className="text-blue-300 font-medium">Ocean Zone:</span>
                  <p className="text-white">{feed.zone}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-blue-300 font-medium">Description:</span>
                <p className="text-white mt-1">{feed.description}</p>
              </div>
            </div>
          </div>

          {/* Educational Panel */}
          <div className="space-y-4">
            {/* Marine Life */}
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-3">Marine Life</h4>
              <div className="space-y-2">
                {feed.species.map((species, index) => (
                  <div
                    key={index}
                    className="bg-cyan-500/20 text-cyan-200 px-3 py-2 rounded-lg text-sm"
                  >
                    {species}
                  </div>
                ))}
              </div>
            </div>

            {/* Ocean Zone Info */}
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-3">
                About the {feed.zone} Zone
              </h4>
              <p className="text-blue-200 text-sm mb-3">
                {feed.educational_content.zone_info}
              </p>
              <p className="text-blue-200 text-sm">
                {feed.educational_content.common_species}
              </p>
            </div>

            {/* Interesting Facts */}
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-3">Did You Know?</h4>
              <ul className="space-y-2">
                {feed.educational_content.interesting_facts.map((fact, index) => (
                  <li key={index} className="text-blue-200 text-sm flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coordinates */}
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-2">Coordinates</h4>
              <div className="text-sm text-blue-200">
                <p>Latitude: {feed.latitude.toFixed(4)}°</p>
                <p>Longitude: {feed.longitude.toFixed(4)}°</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}