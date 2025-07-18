# 🌊 OceanEye - Live Ocean Feeds

Explore real-time underwater camera feeds from ocean research vessels, aquariums, and reefs around the world. Discover marine life and learn about ocean ecosystems through an interactive globe interface.

## ✨ Features

- **Interactive Globe**: Click on clustered markers to explore ocean feeds from different regions
- **Live Ocean Feeds**: 6 curated underwater camera feeds from Honduras, California, and British Columbia
- **Educational Content**: Learn about ocean zones, marine species, and conservation
- **Visual Clustering**: Feeds from the same region are visually grouped for easy navigation
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm start
```

## 🌍 Ocean Feed Locations

- **🏝️ Honduras (3 feeds)**: Utila Bay Islands coral reef system
- **🏢 California (2 feeds)**: Aquarium of the Pacific exhibits
- **🐋 British Columbia (1 feed)**: Orca rubbing beach underwater cam

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS 4
- **UI Components**: Headless UI, Heroicons
- **Maps**: Custom SVG world map with coordinate projection
- **TypeScript**: Full type safety

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically - no configuration needed!

The app is optimized for Vercel deployment with:
- ✅ Static generation for all pages
- ✅ No external API dependencies
- ✅ No environment variables required
- ✅ Optimized build output

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

No additional configuration required! The app works out of the box with:
- Embedded YouTube live streams
- Static ocean feed data
- Client-side interactivity

## 📁 Project Structure

```
app/
├── components/          # React components
│   ├── Globe.tsx       # Interactive world map
│   ├── FeedModal.tsx   # Video player modal
│   └── EducationalPanel.tsx
├── data/               # Static data
│   └── oceanFeeds.ts   # Ocean feed definitions
├── explore/            # Explore page
├── learn/              # Educational content
└── globals.css         # Global styles
```

## 🎯 Ready for Production

- ✅ Build passes without errors
- ✅ No ESLint issues
- ✅ TypeScript compilation successful
- ✅ All links and embeds verified
- ✅ Responsive design tested
- ✅ Performance optimized
