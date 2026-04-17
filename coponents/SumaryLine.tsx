import React from "react";
import Image from "next/image";

export default function () {
  return (
    <div>
        <Image src="/assets/summary.png" alt="Summary" width={400} height={200} />
        <span className="line_description">Reaction</span>
        <div>
            <span className="line_score1">80</span>
            <span className="line_score2">100</span>
        </div>
    </div>
  );
}
