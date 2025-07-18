'use client';

import Link from 'next/link';

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Header - Mobile optimized */}
      <header className="bg-blue-900/50 backdrop-blur-sm border-b border-blue-700/30">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
            Ocean<span className="text-cyan-400">Eye</span>
          </Link>
          <nav className="flex space-x-3 sm:space-x-6">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base">
              <span className="sm:hidden">🏠</span>
              <span className="hidden sm:inline">🏠 Home</span>
            </Link>
            <Link href="/explore" className="text-white hover:text-cyan-400 transition-colors text-sm sm:text-base">
              <span className="sm:hidden">🌍</span>
              <span className="hidden sm:inline">🌍 Explore</span>
            </Link>
            <span className="text-cyan-400 text-sm sm:text-base">
              <span className="sm:hidden">📚</span>
              <span className="hidden sm:inline">📚 Learn</span>
            </span>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Hero Section - Mobile optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
            🌊 Learn About Our Oceans
          </h1>
          <p className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto px-2">
            Discover the mysteries of our planet&apos;s vast oceans, from surface waters teeming with life
            to the deepest trenches where extraordinary creatures thrive in eternal darkness.
          </p>
        </div>

        {/* Ocean Zones Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-600/30">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☀️</div>
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-2 sm:mb-3">Epipelagic Zone</h3>
            <p className="text-blue-100 mb-2 sm:mb-3 text-sm sm:text-base">0-200m depth</p>
            <p className="text-blue-200 text-sm sm:text-base">
              The sunlit surface layer where most marine life thrives. Home to coral reefs,
              kelp forests, and the majority of ocean species we know and love.
            </p>
          </div>

          <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-600/30">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌅</div>
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-2 sm:mb-3">Mesopelagic Zone</h3>
            <p className="text-blue-100 mb-2 sm:mb-3 text-sm sm:text-base">200-1,000m depth</p>
            <p className="text-blue-200 text-sm sm:text-base">
              The twilight zone where sunlight fades. Many creatures here migrate vertically
              each day, creating the largest migration on Earth.
            </p>
          </div>

          <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-600/30">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌑</div>
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-2 sm:mb-3">Bathypelagic Zone</h3>
            <p className="text-blue-100 mb-2 sm:mb-3 text-sm sm:text-base">1,000-4,000m depth</p>
            <p className="text-blue-200 text-sm sm:text-base">
              The midnight zone of eternal darkness. Creatures here create their own light
              through bioluminescence and have adapted to extreme pressure.
            </p>
          </div>
        </div>

        {/* Marine Ecosystems */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8">🐠 Marine Ecosystems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-cyan-500/30">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 mb-3 sm:mb-4">🪸 Coral Reefs</h3>
              <p className="text-blue-200 mb-3 sm:mb-4 text-sm sm:text-base">
                Often called the &quot;rainforests of the sea,&quot; coral reefs support 25% of all marine species
                despite covering less than 1% of the ocean floor.
              </p>
              <ul className="text-blue-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>• Home to over 4,000 fish species</li>
                <li>• Provide coastal protection from storms</li>
                <li>• Support 500+ million people worldwide</li>
                <li>• Threatened by climate change and pollution</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-green-500/30">
              <h3 className="text-xl sm:text-2xl font-bold text-green-300 mb-3 sm:mb-4">🌿 Kelp Forests</h3>
              <p className="text-blue-200 mb-3 sm:mb-4 text-sm sm:text-base">
                Underwater forests of giant kelp that can grow up to 60cm per day, creating
                complex three-dimensional habitats in temperate coastal waters.
              </p>
              <ul className="text-blue-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>• Fastest growing organisms on Earth</li>
                <li>• Absorb massive amounts of CO₂</li>
                <li>• Nurseries for many fish species</li>
                <li>• Home to sea otters, seals, and sharks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conservation Section */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-orange-500/30 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6 text-center">🚨 Ocean Conservation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-red-300 mb-2 sm:mb-3">Current Threats</h3>
              <ul className="text-blue-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>• Climate change and ocean acidification</li>
                <li>• Plastic pollution and microplastics</li>
                <li>• Overfishing and habitat destruction</li>
                <li>• Coastal development and runoff</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-green-300 mb-2 sm:mb-3">How You Can Help</h3>
              <ul className="text-blue-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>• Reduce plastic use and recycle properly</li>
                <li>• Choose sustainable seafood options</li>
                <li>• Support marine protected areas</li>
                <li>• Participate in beach cleanups</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Now that you&apos;ve learned about ocean zones and ecosystems, dive into our live feeds
            to see these incredible environments in real-time!
          </p>
          <Link 
            href="/explore"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
          >
            🌍 Explore Live Ocean Feeds
          </Link>
        </div>
      </div>
    </div>
  );
}
