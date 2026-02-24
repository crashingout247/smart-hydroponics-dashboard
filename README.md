# Smart Hydroponics Dashboard

A web-based dashboard prototype for monitoring and managing a smart hydroponics system.  
Track real-time metrics (pH, EC, temperature, humidity, light levels), visualize yield & cost savings, and integrate basic blockchain features for transparency/logging.

## Features (Current & Planned)

- Real-time sensor data visualization
- Yield prediction charts
- Savings & efficiency calculator
- Wallet connection & on-chain data utils (via ethers.js or similar)
- Responsive design for desktop & mobile

## Tech Stack

- **Frontend**: React (Create React App), Chart.js / Recharts
- **Blockchain**: ethers.js (see `src/utils/blockchainUtils.js`)
- **State Management**: React Hooks (useState, useEffect) – Context/Redux possible later
- **Styling**: [Add yours: Tailwind, Material-UI, CSS modules, etc.]
- **Other**: ESLint, possibly Web3Modal or RainbowKit for wallet connect

## Getting Started

### Prerequisites

- Node.js ≥ 14
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/crashingout247/smart-hydroponics-dashboard.git
cd smart-hydroponics-dashboard

# Install dependencies
npm install
# or
yarn install
