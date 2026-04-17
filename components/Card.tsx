import React from 'react'
import Summary from '@/components/Summary'
import Encabezado from '@/components/Encabezado'
import '@/components/Card.css'

interface data{
  score1: number;
  score2: number;
  score3: number;
  score4: number;
  scoreGlobal: number;
}

export default function Card({ scoreGlobal,score1,score2,score3,score4}: data) {
  return (
    <div className='card-score'>
        <Encabezado scoreGlobal={scoreGlobal} />
        <Summary
            score1={score1}
            score2={score2}
            score3={score3}
            score4={score4}
        />
    </div>
  )
}
