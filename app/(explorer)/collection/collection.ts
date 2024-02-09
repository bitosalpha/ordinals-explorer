// pages/api/collections.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Define your Collection interface
interface Collection {
  description: string;
  discord_link: string;
  icon: string;
  inscription_icon: string;
  name: string;
  slug: string;
  twitter_link: string;
  website_link: string;
}

// Dummy data representing collections
const dummyCollections: Collection[] = [
  {
    description: "Collection 1 description",
    discord_link: "https://discord.com/1",
    icon: "/path/to/icon1.png",
    inscription_icon: "/path/to/inscription_icon1.png",
    name: "Collection 1",
    slug: "collection-1",
    twitter_link: "https://twitter.com/1",
    website_link: "https://example.com/1"
  },
  {
    description: "Collection 2 description",
    discord_link: "https://discord.com/2",
    icon: "/path/to/icon2.png",
    inscription_icon: "/path/to/inscription_icon2.png",
    name: "Collection 2",
    slug: "collection-2",
    twitter_link: "https://twitter.com/2",
    website_link: "https://example.com/2"
  }
  // Add more collections here if needed
];

// Handler function for the API route
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // You can perform additional operations here if needed
  // For example, querying a database
  
  // Send the collections data as a response
  res.status(200).json({ collections: dummyCollections });
}
