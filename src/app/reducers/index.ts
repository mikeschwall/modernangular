import { Action } from "@ngrx/store";
import { CounterIncrementAction } from "../actions";

export const initialState = 0;

export const counterReducer = (state=initialState, action:Action) => {
    
    switch(action.type) {
        case "INCREMENT_ACTION":
            return state + (action as CounterIncrementAction).payload;
        default:
            return state;
    }

    
}