/**
 * Live Feed Links Collection
 * 
 * Drop your live feed URLs here and I'll help you convert them into full OceanFeed objects
 * with all the relevant data (location, depth, species, educational content, etc.)
 */

export interface RawFeedLink {
  url: string;
  notes?: string; // Any additional info you have about the feed
  status?: 'new' | 'processed' | 'verified' | 'broken';
}

export const rawFeedLinks: RawFeedLink[] = [
  // Example entries - replace with your actual live feeds
  {
    url: "https://www.youtube.com/watch?v=EXAMPLE1",
    notes: "Deep sea exploration feed",
    status: "new"
  },
  {
    url: "https://www.youtube.com/watch?v=EXAMPLE2", 
    notes: "Coral reef cam",
    status: "new"
  },
  
  // ADD YOUR LIVE FEED URLS BELOW:
  // Just paste the URLs and I'll help you research and fill out all the details!
  
  // Format:
  // {
  //   url: "YOUR_LIVE_FEED_URL_HERE",
  //   notes: "Any info you know about this feed (optional)",
  //   status: "new"
  // },

  {
    url: "https://www.youtube.com/embed/jzx_n25g3kA?autoplay=1",
    notes: "Utopia Village Sandy Channel Underwater Reef",
    status: "processed"
  },
  {
    url: "https://www.youtube.com/embed/Sq-X4Ga1oyc?autoplay=1",
    notes: "Utopia Village Edge-of-Wall Underwater Reef ",
    status: "processed"
  },
  {
    url: "https://www.youtube.com/embed/kkYybcn5VoM?autoplay=1",
    notes: "Long Beach, CA - Tropical Fish - Coral Predators",
    status: "processed"
  },
  {
    url: "https://www.youtube.com/embed/yuhnCtTPtZo?autoplay=1",
    notes: "Long Beach, CA - Blue Cavern Aquarium",
    status: "processed"
  },
  {
    url: "https://www.youtube.com/embed/vwCXZeswQKY?autoplay=1",
    notes: "Hanson Island, British Columbia - Strider Rubbing Beach Underwater Orcas",
    status: "processed"
  },
  {
    url: "https://www.youtube.com/embed/Lv9t0hZTvz4?autoplay=1",
    notes: "Utopia Village Back-of-Dock Underwater Reef",
    status: "processed"
  }
  
];

/**
 * Instructions for adding feeds:
 * 
 * 1. Find a live ocean feed (YouTube Live, Twitch, direct stream, etc.)
 * 2. Add it to the rawFeedLinks array above
 * 3. Let me know and I'll research:
 *    - Exact location (lat/lng coordinates)
 *    - Depth and ocean zone
 *    - Source organization
 *    - Marine species likely to be seen
 *    - Educational content about the area
 *    - Proper embed URL format
 * 
 * Good sources for live ocean feeds:
 * - explore.org (has many live nature cams)
 * - Monterey Bay Aquarium
 * - NOAA Ocean Exploration
 * - Various aquariums with live cams
 * - Research vessel streams
 * - Underwater webcams from dive sites
 */
