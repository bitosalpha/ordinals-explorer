"use client";
import { useEffect, useState } from 'react';
import BuyConfirmAlert from 'brc20-market-demo/src/components/BuyConfirmAlert';
import Brc20Item from 'brc20-market-demo/src/components/Brc20Item';


interface Collection {
  amount: string;
  bought_at: string | null;
  buyer_address: string | null;
  created: string;
  creator_address: string | null;
  id: string;
  inscription_id: string;
  price_per: string;
  satoshi_price: number;
  seller_address: string;
}

const CollectionsPage = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch('https://turbo.ordinalswallet.com/collection/bitmap/escrows');
        if (!response.ok) {
          throw new Error('Failed to fetch collections');
        }
        const data = await response.json();
        setCollections(data.slice(0, 10)); // Adjusted to take the first 10 entries as mentioned in comment
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Collections</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {isLoading ? (
          <li className="skeleton-loader">Loading...</li>
        ) : (
          collections.map(collection => (
            <li key={collection.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
              <p>ID: {collection.id}</p>
              <p>
                Inscription ID: <a href={`https://bitmap-img.magiceden.dev/v1/${collection.inscription_id}`} target="_blank" rel="noopener noreferrer">{collection.inscription_id}</a>
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={`Inscription #${collection.inscription_id}`}
                src={`https://bitmap-img.magiceden.dev/v1/${collection.inscription_id}`}
                style={{ imageRendering: "pixelated", width: "100px", height: "100px" }} // Adjusted size for consistency
              />
              
              {/* You can add more properties here */}
            </li>
          ))
        )}
      </ul>

    </div>
  );
  
  
};

export default CollectionsPage;
