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
          display: 'block',
          width: '100%',
          maxWidth: '1200px',
          height: '1200px',
          border: 'none',
          margin: 'auto',
        }}
        title="Inscribe The Planet"
      ></iframe>

    </>
  );
};

export default Brc20Homepage;
