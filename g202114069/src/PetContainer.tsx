import React, { useState } from 'react'
import { Pet, AddPetFunc,  DeletePetFunc } from './types'
import PetList from './PetList';
import PetInput from './PetInput';
import './PetContainer.css';

const data : Pet[] = [
  {id: 1, category: '개', number: 5},
  {id: 2, category: '고양이', number: 4},
  {id: 3, category: '앵무새', number: 2}
  
];

function PetContainer() {
  const [petList, setPetList] = useState<Pet[]>(data);

  const addPet : AddPetFunc = (category: string, number: number) => {
    const lastIndex = petList.length - 1;
    const lastId = petList[lastIndex].id;
    const pet = {id: lastId + 1, category: category, number: number};
    setPetList([...petList, pet]);
  }

  const deletePet : DeletePetFunc = (id: number) => {
    setPetList( petList.filter(pet => pet.id !== id));
  }

  return (
    <div className="PetContainer">
      <h1>애완동물</h1>
      <PetInput addPet={addPet} />
      <PetList petList={petList} deletePet={deletePet} />
    </div>
  );
}

export default PetContainer

