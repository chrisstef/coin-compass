## Coin Compass

## Overview

Coin Compass is a cryptocurrency price aggregator using Next.js 14 and CoinGecko API.

## Tech Stack

-   **Next.js 14:** Taking advantage of the latest features and improvements for a modern and optimized web application.

-   **Tailwind CSS:** Utility-first CSS framework to style components and pages efficiently.

-   **CoinGecko API:** Making use of CoinGecko API to access endpoint required for price tracking.

## Features

-   [x] Responsive Layout
-   [x] Light/Dark Mode
-   [x] Infinite Scroll Pagination

## Getting Started

### Prerequisites

Make sure you have `Node.js` and `npm/yarn` installed on your machine.

### Installation

To get started, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/chrisstef/coin-compass.git
```

2. Navigate to the project directory:

```bash
cd coin-compass
```

3. Install dependencies:

```bash
npm install
```

or

```bash
yarn
```

### Configuration

Before running the application, it's important to configure your environment variables. Follow these steps:

1. Create a `.env.local` file in the root of the project.

2. Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

3. Replace the placeholders with actual values for your environment variables:

```bash
NEXT_PUBLIC_COINGECKO_API_KEY=api_key_goes_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### ⚠️ Important!

In order to run the app, you need the [CoinGecko API](https://www.coingecko.com/en/api) key (free).

### Starting the application

After finishing the above steps, run the following command in the project directory:

```bash
npm run dev
```

or

```bash
yarn dev
```

The project should be up and running! Visit `http://localhost:3000` in your browser to view the application.
