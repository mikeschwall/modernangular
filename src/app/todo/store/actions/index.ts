export interface IncrementAction {
    type:"INCREMENT";
    payload: number;
}

export const increment = (n:number) => {
    return {
        type:"INCREMENT",
        payload:n
    }
}