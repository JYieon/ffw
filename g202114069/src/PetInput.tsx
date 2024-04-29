import React, { useState } from 'react'
import type { AddPetFunc } from './types'

type Props = {
  addPet : AddPetFunc
}

function PetInput({ addPet }: Props) {
  const [category, setCategory] = useState<string>('');
  const [number, setNumber] = useState<number>(0);
  const onClick = () => { addPet(category, number); setCategory(''); setNumber(0);}
  return (
    <div>
      <input type='text' value={category} onChange={e => setCategory(e.target.value)} />
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={onClick}>추가</button>
    </div>
  )
}

export default PetInput

