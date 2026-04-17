import React from "react";
import Image from "next/image";
import "@/components/SumaryLine.css";

type color = "red" | "yellow" | "blue" | "green";
interface data{
  icon: string;
  label_ico: string;
  label_description: string;
  score: number;
  total: number;
  typecolor: color; 
}

export default function Line({ icon, label_ico, label_description,score, total, typecolor }: data) {
  return (
    <div className={`summary-line summary-type--${typecolor}`}>
      <div className="line-left">
      <Image 
        src={icon} 
        alt={label_ico} 
        width={20} 
        height={20} 
      />
      <span>{label_description}</span>
      </div>
      <div className="line-right">
        <span className="line_score1">{score}</span>
        <span/>
        <span className="line_score2">/</span>
        <span className="line_score2">{total}</span>
      </div>
    </div>
  );
}
