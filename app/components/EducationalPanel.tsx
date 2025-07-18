'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface EducationalPanelProps {
  className?: string;
}

const oceanZones = [
  {
    name: "Epipelagic Zone",
    depth: "0-200m",
    description: "The sunlit surface layer where most marine life thrives. This zone receives enough sunlight for photosynthesis.",
    characteristics: ["Warm temperatures", "Abundant sunlight", "High biodiversity", "Photosynthesis occurs"],
    species: ["Sea otters", "Dolphins", "Tuna", "Kelp", "Plankton", "Sea turtles"]
  },
  {
    name: "Mesopelagic Zone",
    depth: "200-1,000m",
    description: "The twilight zone where light begins to fade. Many creatures here migrate vertically for feeding.",
    characteristics: ["Dim light", "Temperature drops", "Bioluminescence common", "Vertical migration"],
    species: ["Lanternfish", "Squid", "Jellyfish", "Hatchetfish", "Vampire squid"]
  },
  {
    name: "Bathypelagic Zone",
    depth: "1,000-4,000m",
    description: "The midnight zone with no sunlight. Creatures rely on marine snow and chemosynthesis.",
    characteristics: ["Complete darkness", "Near-freezing temperatures", "High pressure", "Sparse life"],
    species: ["Anglerfish", "Giant isopods", "Deep-sea corals", "Dumbo octopus", "Barreleye fish"]
  },
  {
    name: "Abyssopelagic Zone",
    depth: "4,000-6,000m",
    description: "The abyssal zone with extreme conditions. Life is sparse but highly specialized.",
    characteristics: ["Extreme pressure", "Near-freezing water", "Limited food sources", "Unique adaptations"],
    species: ["Sea cucumbers", "Xenophyophores", "Abyssal fish", "Tube worms", "Deep-sea bacteria"]
  }
];

const conservationFacts = [
  {
    title: "Ocean Acidification",
    description: "Rising CO2 levels are making oceans more acidic, threatening coral reefs and shell-forming creatures.",
    impact: "30% increase in acidity since industrial revolution"
  },
  {
    title: "Plastic Pollution",
    description: "Over 8 million tons of plastic enter our oceans annually, forming massive garbage patches.",
    impact: "5 trillion pieces of plastic currently in oceans"
  },
  {
    title: "Overfishing",
    description: "90% of large fish populations have been depleted due to industrial fishing practices.",
    impact: "Many species face extinction within decades"
  },
  {
    title: "Climate Change",
    description: "Rising temperatures cause coral bleaching and disrupt marine food chains.",
    impact: "50% of coral reefs lost in past 30 years"
  }
];

export default function EducationalPanel({ className = "" }: EducationalPanelProps) {
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'zones' | 'conservation'>('zones');

  return (
    <div className={`bg-gradient-to-b from-blue-900 to-blue-800 rounded-lg p-6 text-white ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Ocean Education</h2>
      
      {/* Tab Navigation */}
      <div className="flex mb-6 bg-white/10 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('zones')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'zones' 
              ? 'bg-cyan-500 text-white' 
              : 'text-blue-200 hover:text-white'
          }`}
        >
          Ocean Zones
        </button>
        <button
          onClick={() => setActiveTab('conservation')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'conservation' 
              ? 'bg-cyan-500 text-white' 
              : 'text-blue-200 hover:text-white'
          }`}
        >
          Conservation
        </button>
      </div>

      {/* Ocean Zones Tab */}
      {activeTab === 'zones' && (
        <div className="space-y-3">
          <p className="text-blue-200 text-sm mb-4">
            The ocean is divided into distinct zones based on depth, light, and pressure. Each zone hosts unique ecosystems.
          </p>
          
          {oceanZones.map((zone, index) => (
            <div key={index} className="bg-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveZone(activeZone === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-white">{zone.name}</h3>
                  <p className="text-cyan-300 text-sm">{zone.depth}</p>
                </div>
                {activeZone === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-blue-300" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-blue-300" />
                )}
              </button>
              
              {activeZone === index && (
                <div className="px-4 pb-4 border-t border-white/10">
                  <p className="text-blue-200 text-sm mb-3 mt-3">{zone.description}</p>
                  
                  <div className="mb-3">
                    <h4 className="font-medium text-white mb-2">Characteristics:</h4>
                    <ul className="text-sm text-blue-200 space-y-1">
                      {zone.characteristics.map((char, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">Common Species:</h4>
                    <div className="flex flex-wrap gap-1">
                      {zone.species.map((species, i) => (
                        <span
                          key={i}
                          className="bg-cyan-500/20 text-cyan-200 px-2 py-1 rounded text-xs"
                        >
                          {species}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Conservation Tab */}
      {activeTab === 'conservation' && (
        <div className="space-y-4">
          <p className="text-blue-200 text-sm mb-4">
            Our oceans face unprecedented challenges. Learn about the major threats and how we can help protect marine ecosystems.
          </p>
          
          {conservationFacts.map((fact, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">{fact.title}</h3>
              <p className="text-blue-200 text-sm mb-2">{fact.description}</p>
              <div className="bg-red-500/20 text-red-200 px-3 py-1 rounded text-xs inline-block">
                {fact.impact}
              </div>
            </div>
          ))}
          
          <div className="bg-green-500/20 rounded-lg p-4 mt-6">
            <h3 className="font-semibold text-white mb-2">How You Can Help</h3>
            <ul className="text-sm text-green-200 space-y-1">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                Reduce plastic use and recycle properly
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                Choose sustainable seafood options
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                Support marine conservation organizations
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                Reduce carbon footprint to combat climate change
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
