import React from 'react'
import "@/components/Encabezado.css";

interface data{
  scoreGlobal: number;
}

export default function Encabezado({ scoreGlobal }: data) {
  return (
    <div className='encabezado'>
        <h3 className='title'>Your Result</h3>
        <div className='score-box'>
            <h1 className='score-general'>{scoreGlobal}</h1>
            <p className='score-label'>of 100</p>
        </div>
        <div className='description'>
            <h2 className='description-title'>Great</h2>
            <p className='description-label'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    </div>
  )
}
