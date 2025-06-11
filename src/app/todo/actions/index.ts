export interface Increment {
    type: string;
    payload: number;
}

export const incrementAction = (num:number) => {
    return {
        type:"INCREMENT",
        payload: num
    }
}