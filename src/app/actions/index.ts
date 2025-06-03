export interface CounterIncrementAction {
    type:"INCREMENT_ACTION",
    payload: number;
}

export const increment = (n:number) => {
    return {
        type:"INCREMENT_ACTION",
        payload: n
    }
}