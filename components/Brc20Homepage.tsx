import Link from "next/link";
import Brc20TokensTable, { Brc20EarliestTokensTable } from "./Brc20TokensTable";

const Brc20Homepage = () => {
  return (
    <>
      {/* Insert iframe here */}
      <iframe 
        src="https://inscribetheplanet.com/" 
        width="1200" 
        height="1200"
        style={{
          display: 'block',      // Makes the iframe a block element
          width: '100%',         // Sets the width to 100% of the parent container
          maxWidth: '1200px',    // Optional: Sets a maximum width for the iframe
          height: '1200px',      // Sets the height
          border: 'none',        // Removes the border
          margin: 'auto'         // Centers the iframe horizontally
        }}
        title="Inscribe The Planet"
      ></iframe>
    </>
  );
};

export default Brc20Homepage;
