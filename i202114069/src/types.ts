export type Todo = {
    id: number,
    title: string,
    price: number,
    done: boolean
  };
  
  export type AddTodoFunc = (text: string, price: number) => void;
  export type ToggleTodoFunc = (id: number) => void;
  export type DeleteTodoFunc = (id: number) => void;
