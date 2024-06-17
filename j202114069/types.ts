export type Book = {
    id: number,
    title: string,
    price: number
  };
  
  export type AddBookFunc = (title: string, price: number) => void;
  export type DeleteBookFunc = (id: number) => void;
  