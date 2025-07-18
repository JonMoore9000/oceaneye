'use client';

import { useState } from 'react';
import { oceanFeeds, type OceanFeed } from '../data/oceanFeeds';

interface GlobeProps {
  onFeedSelect: (feed: OceanFeed) => void;
}

export default function Globe({ onFeedSelect }: GlobeProps) {
  const [selectedFeedId, setSelectedFeedId] = useState<string | null>(null);

  // Group feeds by region for visual clustering
  const feedGroups = oceanFeeds.reduce((groups, feed) => {
    const region = feed.region;
    if (!groups[region]) {
      groups[region] = [];
    }
    groups[region].push(feed);
    return groups;
  }, {} as Record<string, OceanFeed[]>);

  const handleMarkerClick = (feed: OceanFeed) => {
    setSelectedFeedId(feed.id);
    onFeedSelect(feed);
  };

  // World map with clickable markers
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 overflow-hidden" style={{ pointerEvents: 'auto' }}>
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full pointer-events-none"
          style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))', pointerEvents: 'none' }}
        >
          {/* Simplified continents */}
          {/* North America */}
          <path
            d="M100,150 Q150,120 200,140 L250,130 Q300,140 320,180 L300,220 Q250,200 200,210 L150,200 Q100,180 100,150 Z"
            fill="rgba(34, 197, 94, 0.3)"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="1"
          />
          {/* South America */}
          <path
            d="M200,250 Q230,240 250,260 L270,300 Q260,350 240,380 L220,370 Q200,340 190,300 L200,250 Z"
            fill="rgba(34, 197, 94, 0.3)"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="1"
          />
          {/* Europe */}
          <path
            d="M450,140 Q480,130 510,140 L530,150 Q520,170 500,180 L480,170 Q450,160 450,140 Z"
            fill="rgba(34, 197, 94, 0.3)"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="1"
          />
          {/* Africa */}
          <path
            d="M480,180 Q520,170 540,200 L550,250 Q540,300 520,320 L500,310 Q480,280 470,230 L480,180 Z"
            fill="rgba(34, 197, 94, 0.3)"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="1"
          />
          {/* Asia */}
          <path
            d="M550,120 Q650,110 750,130 L800,140 Q780,180 750,190 L650,180 Q550,160 550,120 Z"
            fill="rgba(34, 197, 94, 0.3)"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="1"
          />
          {/* Australia */}
          <path
            d="M700,300 Q750,290 800,300 L820,320 Q800,340 750,350 L700,340 Q680,320 700,300 Z"
            fill="rgba(34, 197, 94, 0.3)"
            stroke="rgba(34, 197, 94, 0.6)"
            strokeWidth="1"
          />
          {/* Geographic labels */}
          <text x="175" y="170" fill="rgba(6, 182, 212, 0.7)" fontSize="12" textAnchor="middle">North America</text>
          <text x="225" y="290" fill="rgba(6, 182, 212, 0.7)" fontSize="12" textAnchor="middle">South America</text>
          <text x="480" y="160" fill="rgba(6, 182, 212, 0.7)" fontSize="12" textAnchor="middle">Europe</text>
          <text x="520" y="250" fill="rgba(6, 182, 212, 0.7)" fontSize="12" textAnchor="middle">Africa</text>
          <text x="650" y="160" fill="rgba(6, 182, 212, 0.7)" fontSize="12" textAnchor="middle">Asia</text>
          <text x="760" y="330" fill="rgba(6, 182, 212, 0.7)" fontSize="12" textAnchor="middle">Australia</text>
        </svg>
      </div>



      {/* Ocean Feed Markers - Clustered by Region */}
      <div className="absolute inset-0" style={{ pointerEvents: 'auto' }}>
        {Object.entries(feedGroups).map(([region, feeds]) => {
          // Use the first feed's coordinates as the cluster center
          const centerFeed = feeds[0];
          const centerX = ((centerFeed.longitude + 180) / 360) * 100;
          const centerY = ((90 - centerFeed.latitude) / 180) * 100;

          // Clamp center coordinates
          const clampedCenterX = Math.max(5, Math.min(95, centerX));
          const clampedCenterY = Math.max(10, Math.min(90, centerY));

          return (
            <div key={region} className="absolute" style={{
              left: `${clampedCenterX}%`,
              top: `${clampedCenterY}%`,
              transform: 'translate(-50%, -50%)'
            }}>
              {/* Cluster background for multiple feeds */}
              {feeds.length > 1 && (
                <div className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/30 rounded-xl backdrop-blur-sm"
                     style={{
                       width: feeds.length === 2 ? '120px' : '160px',
                       height: feeds.length === 2 ? '60px' : '80px',
                       left: '50%',
                       top: '50%',
                       transform: 'translate(-50%, -50%)',
                       zIndex: 30
                     }}>
                  {/* Region label */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-medium whitespace-nowrap">
                    {region.split(',')[0]} ({feeds.length} feeds)
                  </div>
                </div>
              )}

              {/* Individual markers positioned within cluster */}
              {feeds.map((feed, index) => {
                // Position markers in a small cluster pattern
                let offsetX = 0, offsetY = 0;
                if (feeds.length === 2) {
                  offsetX = index === 0 ? -25 : 25;
                } else if (feeds.length === 3) {
                  const positions = [
                    { x: 0, y: -20 },    // top center
                    { x: -30, y: 15 },   // bottom left
                    { x: 30, y: 15 }     // bottom right
                  ];
                  offsetX = positions[index].x;
                  offsetY = positions[index].y;
                }

                return (
                  <div
                    key={feed.id}
                    className="absolute z-40"
                    style={{
                      left: `${offsetX}px`,
                      top: `${offsetY}px`,
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'auto'
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMarkerClick(feed);
                      }}
                      className={`relative transition-all duration-300 hover:scale-150 hover:z-50 group cursor-pointer bg-transparent border-none p-3 sm:p-2 ${
                        selectedFeedId === feed.id ? 'scale-150 z-50' : ''
                      }`}
                      style={{ pointerEvents: 'auto', minWidth: '44px', minHeight: '44px' }}
                      title={feed.name}
                    >
                      {/* Pulsing ring animation - larger on mobile */}
                      <div className="absolute -inset-3 sm:-inset-2 rounded-full bg-cyan-400 animate-ping opacity-50 pointer-events-none"></div>
                      <div className="absolute -inset-2 sm:-inset-1 rounded-full bg-cyan-300 animate-pulse opacity-30 pointer-events-none"></div>

                      {/* Main marker - larger on mobile */}
                      <div className="relative w-7 h-7 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-white shadow-xl pointer-events-none">
                        <div className="absolute inset-1 bg-gradient-to-br from-cyan-200 to-cyan-400 rounded-full"></div>
                        <div className="absolute inset-2 bg-white rounded-full opacity-60"></div>
                      </div>

                      {/* Enhanced tooltip - mobile optimized */}
                      <div className="absolute bottom-12 sm:bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-xl border border-cyan-400/30 z-50 max-w-xs">
                        <div className="font-semibold text-cyan-300 truncate">{feed.name}</div>
                        <div className="text-xs text-blue-200 truncate">{feed.region}</div>
                        <div className="text-xs text-gray-300">Depth: {feed.depth}</div>
                        {/* Arrow pointing down */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Latitude/Longitude Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-full h-full pointer-events-none">
          {/* Latitude lines */}
          {[0, 100, 200, 300, 400, 500].map((y, i) => (
            <line
              key={`lat-${i}`}
              x1="0"
              y1={y}
              x2="1000"
              y2={y}
              stroke="rgba(6, 182, 212, 0.3)"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
          ))}
          {/* Longitude lines */}
          {[0, 200, 400, 600, 800, 1000].map((x, i) => (
            <line
              key={`lng-${i}`}
              x1={x}
              y1="0"
              x2={x}
              y2="500"
              stroke="rgba(6, 182, 212, 0.3)"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
          ))}
        </svg>
      </div>

      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="wave-animation absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
          <div className="wave-animation absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Legend - More compact on mobile */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-white max-w-[140px] sm:max-w-none">
        <h3 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-base">Legend</h3>
        <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm mb-1 sm:mb-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-400 flex-shrink-0"></div>
          <span className="text-xs sm:text-sm">Live Feed</span>
        </div>
        <div className="text-xs text-blue-300 space-y-0.5">
          <div>🏝️ Honduras: 3</div>
          <div>🏢 California: 2</div>
          <div>🐋 BC: 1</div>
        </div>
      </div>

      {/* Instructions - More compact on mobile, positioned to avoid overlap */}
      <div className="absolute bottom-1 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg p-2 sm:p-4 text-white text-center max-w-[280px] sm:max-w-md mx-2">
        <h3 className="font-semibold mb-1 sm:mb-2 text-cyan-300 text-xs sm:text-base">🌊 Explore Live Ocean Feeds</h3>
        <p className="text-xs sm:text-sm mb-1 sm:mb-2">Tap the cyan markers to watch live underwater cameras</p>
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 text-xs">
          <span>📍 {oceanFeeds.length} feeds</span>
          <span className="hidden sm:inline">🐠 Marine life</span>
          <span>🌍 Global</span>
        </div>
      </div>
    </div>
  );
}
