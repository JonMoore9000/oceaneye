export interface OceanFeed {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  stream_url: string;
  depth: string;
  region: string;
  source: string;
  description: string;
  zone: string;
  species: string[];
  educational_content: {
    zone_info: string;
    common_species: string;
    interesting_facts: string[];
  };
}

export const oceanFeeds: OceanFeed[] = [
  {
    id: "utila-sandy-channel",
    name: "Utila Sandy Channel Underwater Reef",
    latitude: 16.100,
    longitude: -86.933,
    stream_url: "https://www.youtube.com/embed/jzx_n25g3kA?autoplay=1",
    depth: "15-25m",
    region: "Utila, Bay Islands, Honduras",
    source: "Utopia Village Dive Resort",
    description: "Live underwater camera showcasing the vibrant coral reef ecosystem of Utila's Sandy Channel, part of the world's second-largest barrier reef system.",
    zone: "Epipelagic",
    species: ["Whale sharks", "Caribbean reef sharks", "Spotted eagle rays", "Green moray eels", "Parrotfish", "Angelfish", "Butterflyfish", "Groupers", "Barracuda", "Sea turtles"],
    educational_content: {
      zone_info: "This reef is part of the Mesoamerican Barrier Reef System, the second-largest coral reef system in the world, stretching over 1,000 kilometers along the Caribbean coast.",
      common_species: "Utila is world-famous for whale shark encounters, with these gentle giants visiting year-round. The reef also hosts diverse Caribbean marine life including colorful reef fish, rays, sharks, and sea turtles.",
      interesting_facts: [
        "Utila is one of the world's most reliable places to see whale sharks year-round",
        "The Mesoamerican Barrier Reef supports over 500 fish species and 65 coral species",
        "Utila's reefs are part of a UNESCO World Heritage marine protected area",
        "The island is a major hub for affordable scuba diving certification",
        "Local conservation efforts focus on protecting whale shark populations and coral restoration"
      ]
    }
  },
  {
    id: "utila-edge-wall",
    name: "Utila Edge-of-Wall Underwater Reef",
    latitude: 16.080,
    longitude: -86.950,
    stream_url: "https://www.youtube.com/embed/Sq-X4Ga1oyc?autoplay=1",
    depth: "20-30m",
    region: "Utila, Bay Islands, Honduras",
    source: "Utopia Village Dive Resort",
    description: "Live underwater camera positioned at the dramatic edge of Utila's coral wall, where the reef drops into deeper waters, attracting larger marine species.",
    zone: "Epipelagic",
    species: ["Whale sharks", "Caribbean reef sharks", "Eagle rays", "Barracuda", "Groupers", "Jacks", "Moray eels", "Parrotfish", "Angelfish", "Sea turtles"],
    educational_content: {
      zone_info: "Wall diving sites are where coral reefs meet the deep ocean, creating dramatic underwater landscapes and attracting both reef and pelagic species.",
      common_species: "The edge of the wall is a prime location for encounters with larger marine life including whale sharks, rays, and schools of pelagic fish that cruise the reef edge.",
      interesting_facts: [
        "Wall dives offer some of the most dramatic underwater scenery in the Caribbean",
        "The reef edge attracts both shallow reef species and deep-water visitors",
        "Utila's walls are part of an ancient volcanic formation",
        "Strong currents along walls bring nutrients that support abundant marine life",
        "Wall diving is considered some of the best in the Caribbean"
      ]
    }
  },
  {
    id: "long-beach-tropical-fish",
    name: "Aquarium of the Pacific - Tropical Fish Exhibit",
    latitude: 33.7622,
    longitude: -118.1970,
    stream_url: "https://www.youtube.com/embed/kkYybcn5VoM?autoplay=1",
    depth: "Aquarium Tank",
    region: "Long Beach, California, USA",
    source: "Aquarium of the Pacific",
    description: "Live camera showcasing tropical coral reef predators and colorful reef fish in a carefully maintained aquarium environment.",
    zone: "Aquarium Exhibit",
    species: ["Anthias", "Wrasses", "Angelfish", "Butterflyfish", "Tangs", "Groupers", "Moray eels", "Coral reef fish"],
    educational_content: {
      zone_info: "This exhibit recreates a tropical coral reef ecosystem, demonstrating the complex relationships between predators and prey in reef environments.",
      common_species: "Features a diverse collection of Indo-Pacific coral reef species, including colorful reef fish and their predators in a balanced ecosystem.",
      interesting_facts: [
        "The Aquarium of the Pacific is the 4th most visited aquarium in the US",
        "Houses over 11,000 animals representing 500+ species",
        "Focuses on Pacific Ocean marine life and conservation",
        "Uses advanced filtration systems to maintain pristine water quality",
        "Educational programs reach over 1.7 million visitors annually"
      ]
    }
  },
  {
    id: "long-beach-blue-cavern",
    name: "Aquarium of the Pacific - Honda Blue Cavern",
    latitude: 33.7600,
    longitude: -118.2000,
    stream_url: "https://www.youtube.com/embed/yuhnCtTPtZo?autoplay=1",
    depth: "Aquarium Tank",
    region: "Long Beach, California, USA",
    source: "Aquarium of the Pacific",
    description: "Live underwater camera in the Blue Cavern exhibit, recreating the underwater environment of Southern California's Channel Islands.",
    zone: "Aquarium Exhibit",
    species: ["Garibaldi fish", "Moray eels", "Rockfish", "Sea bass", "Kelp forest fish", "Anemones", "Sea stars"],
    educational_content: {
      zone_info: "The Blue Cavern exhibit replicates the underwater caves and rocky reefs found around California's Channel Islands, particularly Catalina Island.",
      common_species: "Features native Southern California marine life including the state fish (Garibaldi) and species typical of temperate Pacific waters.",
      interesting_facts: [
        "Recreates the famous Blue Cavern dive site at Catalina Island",
        "Garibaldi fish are California's official state marine fish",
        "The exhibit demonstrates temperate vs tropical marine ecosystems",
        "Channel Islands are often called the 'Galapagos of California'",
        "Features species adapted to cooler Pacific waters"
      ]
    }
  },
  {
    id: "hanson-island-orcas",
    name: "OrcaLab - Strider Rubbing Beach Underwater",
    latitude: 50.5741,
    longitude: -126.7064,
    stream_url: "https://www.youtube.com/embed/vwCXZeswQKY?autoplay=1",
    depth: "5-15m",
    region: "Hanson Island, British Columbia, Canada",
    source: "OrcaLab Research Station",
    description: "Unique underwater camera at Strider Rubbing Beach where wild orcas come to rub against the rocky bottom in their natural behavior.",
    zone: "Epipelagic",
    species: ["Orcas (Killer whales)", "Pacific salmon", "Rockfish", "Kelp", "Sea stars", "Anemones", "Crabs", "Marine algae"],
    educational_content: {
      zone_info: "This site captures one of the most remarkable marine mammal behaviors - orcas deliberately rubbing against rocky beaches as part of their social and grooming activities.",
      common_species: "Home to the Northern Resident orca population, along with Pacific Northwest marine life including salmon, rockfish, and kelp forest species.",
      interesting_facts: [
        "Orcas rub against beaches to remove dead skin and parasites",
        "This behavior is passed down through generations culturally",
        "Northern Resident orcas are a distinct population with unique dialects",
        "OrcaLab has been studying orcas here since 1970",
        "Each orca family has its own vocal dialect like human languages",
        "Strider Rubbing Beach is named after a famous orca matriarch"
      ]
    }
  },
  {
    id: "utila-back-dock",
    name: "Utila Back-of-Dock Underwater Reef",
    latitude: 16.120,
    longitude: -86.910,
    stream_url: "https://www.youtube.com/embed/Lv9t0hZTvz4?autoplay=1",
    depth: "8-12m",
    region: "Utila, Bay Islands, Honduras",
    source: "Utopia Village Dive Resort",
    description: "Live underwater cameras positioned 165 feet from shore under the resort dock, showcasing the accessible coral reef ecosystem perfect for snorkeling and diving.",
    zone: "Epipelagic",
    species: ["Parrotfish", "Angelfish", "Butterflyfish", "Sergeant majors", "Yellowtail snappers", "Groupers", "Wrasses", "Coral formations", "Sponges", "Sea fans"],
    educational_content: {
      zone_info: "Shallow reef environments like this dock area serve as nurseries for juvenile fish and are easily accessible for snorkelers and new divers to explore.",
      common_species: "Features typical Caribbean reef fish in their natural habitat, with coral formations providing shelter and feeding areas for diverse marine life.",
      interesting_facts: [
        "Dock diving is a popular way to explore reefs without boat trips",
        "Shallow reefs receive maximum sunlight for coral photosynthesis",
        "Many fish species use dock structures as artificial reefs",
        "Night diving here reveals different nocturnal species",
        "The cameras are positioned to minimize impact on marine life",
        "This depth is perfect for Open Water diver certification"
      ]
    }
  },
  {
    id: "frying-pan-tower-sharks",
    name: "Frying Pan Tower - Atlantic Shark Cam",
    latitude: 33.4833,
    longitude: -77.5833,
    stream_url: "https://www.youtube.com/embed/og8bbxl0iW8?autoplay=1",
    depth: "15-25m",
    region: "Cape Fear, North Carolina, USA",
    source: "Explore.org & Frying Pan Tower",
    description: "Live underwater camera beneath the historic Frying Pan Tower, 34 miles off the North Carolina coast, showcasing Atlantic sharks and marine life.",
    zone: "Epipelagic",
    species: ["Sand tiger sharks", "Sandbar sharks", "Atlantic spadefish", "Cobia", "Barracuda", "Amberjack", "Black sea bass", "Red drum", "King mackerel", "Sea turtles"],
    educational_content: {
      zone_info: "Located on Frying Pan Shoals, this area is part of the Gulf Stream system where warm tropical waters meet cooler Atlantic waters, creating rich feeding grounds for marine life.",
      common_species: "The waters around Frying Pan Tower are famous for large shark populations, particularly sand tiger sharks that aggregate here seasonally, along with various game fish and sea turtles.",
      interesting_facts: [
        "Frying Pan Tower is a decommissioned Coast Guard light station built in 1964",
        "The tower sits 34 miles offshore in 45 feet of water on Frying Pan Shoals",
        "This area is part of the 'Graveyard of the Atlantic' with over 3,000 shipwrecks",
        "Sand tiger sharks gather here in large numbers during summer months",
        "The Gulf Stream brings warm water and diverse marine life to this area",
        "The tower now serves as a research platform and bed & breakfast"
      ]
    }
  },
  {
    id: "aquarium-pacific-shark-lagoon",
    name: "Aquarium of the Pacific - Shark Lagoon",
    latitude: 33.7622,
    longitude: -118.1970,
    stream_url: "https://www.youtube.com/embed/BLvr4K2eiRE?autoplay=1",
    depth: "Aquarium Tank",
    region: "Long Beach, California, USA",
    source: "Aquarium of the Pacific",
    description: "Live camera overlooking the Shark Lagoon exhibit featuring multiple shark species in the Aquarium of the Pacific's largest predator habitat.",
    zone: "Aquarium Exhibit",
    species: ["Zebra sharks", "Whitetip reef sharks", "Blacktip reef sharks", "Nurse sharks", "Bonnethead sharks", "Rays", "Guitar fish", "Tropical fish"],
    educational_content: {
      zone_info: "The Shark Lagoon is the Aquarium's largest exhibit, designed to showcase the diversity of shark species and dispel myths about these important ocean predators.",
      common_species: "Features a variety of shark species from different ocean regions, demonstrating the diversity of these apex predators and their important role in marine ecosystems.",
      interesting_facts: [
        "Sharks have existed for over 400 million years, predating dinosaurs",
        "Most sharks are not dangerous to humans - only 3 species are responsible for most attacks",
        "Sharks play a crucial role in maintaining healthy ocean ecosystems",
        "The Shark Lagoon holds 280,000 gallons of water",
        "Visitors can touch bamboo sharks and rays in the interactive touch pools",
        "The exhibit helps educate about shark conservation and the threats they face"
      ]
    }
  }
];

export const getRandomFeed = (): OceanFeed => {
  return oceanFeeds[Math.floor(Math.random() * oceanFeeds.length)];
};

export const getFeedById = (id: string): OceanFeed | undefined => {
  return oceanFeeds.find(feed => feed.id === id);
};

export const getFeedsByZone = (zone: string): OceanFeed[] => {
  return oceanFeeds.filter(feed => feed.zone === zone);
};
