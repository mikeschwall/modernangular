import { Action } from "@ngrx/store"
import { IncrementAction } from "../actions";

const initialState = 0

export const counterReducer = (state = initialState,action:Action) => {

    switch(action.type) {
        case "INCREMENT":
            
            return state + (action as IncrementAction).payload;
        default:
            return state;
    }
    
}