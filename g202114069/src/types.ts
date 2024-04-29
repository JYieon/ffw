export type Pet = {
    id: number,
    category: string,
    number: number
  };
  
  export type AddPetFunc = (category: string, number: number) => void;
  export type DeletePetFunc = (id: number) => void;