import React from 'react'
import Line from '@/components/SummaryLine';
import "@/components/Summary.css";
import BotonSummary from '@/components/BotonSummary';
interface data{
  score1: number;
  score2: number;
  score3: number;
  score4: number;
}

export default function Summary({score1,score2,score3,score4}: data) {
  return (
    <div className='box'>
      <h3 className='title-summary'>Summary</h3>
      <Line
        icon="/icon-memory.svg"
        label_ico="Icon 1"
        label_description="Memory"
        score={score1}
        total={100}
        typecolor="yellow"
      />
      <Line
        icon="/icon-reaction.svg"
        label_ico="Icon 1"
        label_description="Reaction"
        score={score2}
        total={100}
        typecolor="red"
      />
      <Line
        icon="/icon-verbal.svg"
        label_ico="Icon 1"
        label_description="Verbal"
        score={score3}
        total={100}
        typecolor="green"
      />
      <Line
        icon="/icon-visual.svg"
        label_ico="Icon 1"
        label_description="Visual"
        score={score4}
        total={100}
        typecolor="blue"
      />
      <BotonSummary/>
    </div>
  );
}
