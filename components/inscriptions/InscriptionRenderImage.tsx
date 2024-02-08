import { cn } from "../../lib/utils";
import { InscriptionResponse } from "../../lib/types";

const InscriptionRenderImage = ({
  inscription,
  className,
}: {
  inscription: InscriptionResponse;
  className?: string;
}) => {
  return (
    <div
      className={cn("flex items-center justify-center bg-[#000000]", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={`Inscription #${inscription.number}`}
        src={`https://ordinals.com/content/${inscription.id}`}
        style={{ imageRendering: "pixelated" }}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default InscriptionRenderImage;
