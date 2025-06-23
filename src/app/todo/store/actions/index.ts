export interface IncrementAction {
    type: "INCREMENT";
    payload: number;
}

export const increment = (n:number) => {
    
    console.log(n);
    return {
        type:"INCREMENT",
        payload:n
    }
}