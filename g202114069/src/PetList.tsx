  import React, {useState} from 'react'
  import type { Pet, DeletePetFunc } from './types'
  
  type Props = {
    petList: Pet[]
    deletePet: DeletePetFunc
  }
  
  function PetList({ petList, deletePet }: Props) {
    const [color, setColor] = useState('');
    const confirmDelete = (pet: Pet) => {
      if (window.confirm('삭제하시겠습니까?'))
        deletePet(pet.id)
    };

    const petColor = (pet: Pet) => {
      if (pet.number % 2 === 0){
        setColor('yellow')
      } else setColor('grren')
    }
    
    const trList = petList.map(pet => (
      <tr key={pet.id} value={petColor} >
        <td>{ pet.id }</td>
        <td>{ pet.category }</td>
        <td>{ pet.number }</td>
        <td><button onClick={e => confirmDelete(pet)}>삭제</button></td>
      </tr>
    ));
    return (
      <table>
        <thead>
          <tr><td>id</td><td>종류</td><td>마리</td><td></td></tr>
        </thead>
        <tbody>
          {trList}
        </tbody>
      </table>
    )
  }
  
  export default PetList
  