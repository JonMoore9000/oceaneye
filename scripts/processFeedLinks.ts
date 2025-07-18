/**
 * Feed Link Processor
 * 
 * This script helps convert raw feed links into complete OceanFeed objects
 * with all the necessary data for the application.
 */

import { rawFeedLinks, type RawFeedLink } from '../app/data/liveFeedLinks';
import { type OceanFeed } from '../app/data/oceanFeeds';

/**
 * Template for processing a feed link into a complete OceanFeed object
 */
export function createFeedTemplate(rawFeed: RawFeedLink): Partial<OceanFeed> {
  return {
    id: generateFeedId(rawFeed.url),
    name: "TO_BE_RESEARCHED", // I'll help you find the proper name
    latitude: 0, // I'll help you find exact coordinates
    longitude: 0,
    stream_url: convertToEmbedUrl(rawFeed.url),
    depth: "TO_BE_RESEARCHED", // I'll help determine depth
    region: "TO_BE_RESEARCHED", // I'll help identify the region
    source: "TO_BE_RESEARCHED", // I'll help identify the organization
    description: "TO_BE_RESEARCHED", // I'll help write a description
    zone: "TO_BE_RESEARCHED", // I'll help determine ocean zone
    species: [], // I'll help identify likely species
    educational_content: {
      zone_info: "TO_BE_RESEARCHED",
      common_species: "TO_BE_RESEARCHED", 
      interesting_facts: []
    }
  };
}

/**
 * Convert various URL formats to embeddable URLs
 */
function convertToEmbedUrl(url: string): string {
  // YouTube
  if (url.includes('youtube.com/watch')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Vimeo
  if (url.includes('vimeo.com/')) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    return `https://player.vimeo.com/video/${videoId}`;
  }
  
  // Twitch
  if (url.includes('twitch.tv/')) {
    const channel = url.split('twitch.tv/')[1]?.split('?')[0];
    return `https://player.twitch.tv/?channel=${channel}&parent=localhost`;
  }
  
  // Direct stream or other - return as is for now
  return url;
}

/**
 * Generate a unique ID for a feed based on its URL
 */
function generateFeedId(url: string): string {
  const hash = url.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  return `feed-${Math.abs(hash)}`;
}

/**
 * Research checklist for each feed
 */
export const researchChecklist = {
  basic_info: [
    "What is the official name of this feed/camera?",
    "What organization operates this feed?",
    "Is this actually live or recorded?",
    "What is the direct embed URL?"
  ],
  location: [
    "What are the exact GPS coordinates?",
    "What body of water is this in?",
    "What region/country is this near?",
    "What is the depth of the camera?"
  ],
  marine_biology: [
    "What ocean zone is this in? (epipelagic, mesopelagic, etc.)",
    "What marine species are commonly seen here?",
    "What type of ecosystem is this? (coral reef, kelp forest, deep sea, etc.)",
    "What are some interesting facts about this location?"
  ],
  educational: [
    "What makes this location scientifically interesting?",
    "What conservation issues affect this area?",
    "What research is being conducted here?",
    "What can viewers learn from watching this feed?"
  ]
};

/**
 * Example of how I'll help you process feeds:
 * 
 * 1. You add URLs to liveFeedLinks.ts
 * 2. I research each feed using web search
 * 3. I provide you with complete OceanFeed objects
 * 4. We verify the feeds work and are actually live
 * 5. We add them to the main oceanFeeds.ts file
 */

// Export templates for new feeds
export function generateFeedTemplates(): Partial<OceanFeed>[] {
  return rawFeedLinks
    .filter(feed => feed.status === 'new')
    .map(createFeedTemplate);
}

console.log('Feed processing utilities loaded!');
console.log(`Found ${rawFeedLinks.length} raw feed links to process`);
