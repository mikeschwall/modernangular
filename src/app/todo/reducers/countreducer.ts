import { Action } from "@ngrx/store";
import { Increment } from "../actions";

const initialState = 0;

export const countReducer = (state= initialState,action:Action) => {
    switch(action.type) {
        case "INCREMENT":
            return (action as Increment).payload + state;
        default:
            return state;
    }

}