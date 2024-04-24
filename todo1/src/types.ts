export type Todo = {
    id: number,
    title: string,
    done: boolean
  };
  
  export type AddTodoFunc = (text: string) => void;
  export type ToggleTodoFunc = (id: number) => void;
  export type DeleteTodoFunc = (id: number) => void;
