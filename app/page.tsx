'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { getRandomFeed, type OceanFeed } from "./data/oceanFeeds";

export default function Home() {
  const [featuredFeed, setFeaturedFeed] = useState<OceanFeed | null>(null);

  useEffect(() => {
    setFeaturedFeed(getRandomFeed());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ocean<span className="text-cyan-400">Eye</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Dive into the depths of our oceans through live underwater camera feeds from around the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/explore"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                🌍 Explore the Globe
              </Link>
              <Link href="/learn" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block">
                📚 Learn About Oceans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Live Feed Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Live Feed
          </h2>
          <p className="text-blue-200 text-lg">
            Experience the ocean in real-time
          </p>
        </div>

        {featuredFeed && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-black">
              <iframe
                src={featuredFeed.stream_url}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={featuredFeed.name}
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {featuredFeed.name}
                </h3>
                <p className="text-blue-200 mb-4">
                  {featuredFeed.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-blue-300">
                    <span className="font-semibold mr-2">📍 Location:</span>
                    {featuredFeed.region}
                  </div>
                  <div className="flex items-center text-blue-300">
                    <span className="font-semibold mr-2">🌊 Depth:</span>
                    {featuredFeed.depth}
                  </div>
                  <div className="flex items-center text-blue-300">
                    <span className="font-semibold mr-2">🏢 Source:</span>
                    {featuredFeed.source}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Marine Life You Might See
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredFeed.species.map((species, index) => (
                    <span
                      key={index}
                      className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-sm"
                    >
                      {species}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-blue-200 text-sm">
                    {featuredFeed.educational_content.zone_info}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover live ocean feeds from around the world on our interactive globe
          </p>
          <Link
            href="/explore"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg inline-block"
          >
            Start Exploring 🌊
          </Link>
        </div>
      </div>
    </div>
  );
}
