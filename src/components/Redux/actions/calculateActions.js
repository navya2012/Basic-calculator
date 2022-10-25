import {  NUMBERS, BACKSPACE, ANSWER, CLEAR } from "./action.types";

export const allclear = () => {
    return{
        type:CLEAR  
    }
}
export const button = (number) => {
    return{
        type:NUMBERS,
        payload: number
    }
}
export const output = () => {
    return{
        type:ANSWER
    }
}
export const backspace = () => {
    return{
        type:BACKSPACE
    }
}
