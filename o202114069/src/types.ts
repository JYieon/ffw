export type Book = { 
    id: number, 
    title: string,
    author: string
}

export type AddBookFunc = (title: string, author: string) => void;
export type ToggleBookFunc = (id: number) => void;
export type DeleteBookFunc = (id: number) => void;
