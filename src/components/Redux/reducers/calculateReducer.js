
const initialState = {
    input: ""
}

const calculateReducer = (state = initialState, action) => {
    console.log(action, state, "state and action values")
    switch (action.type) {
        
        case 'NUMBERS':
            console.log(state.input, "Calculator input")
            return { 
                ...state,
                input: state.input + action.payload 
            }
        case 'CLEAR':
            console.log(state.input, "Calculator clear")
            return { 
                ...state,
                input: "",
            }
        case 'ANSWER':
            console.log(state.input, "Calculator output")
            return {
                ...state,
                 input: eval(state.input), 
             }
        case 'BACKSPACE':
            console.log(state.input, "backspace")
            return {
                ...state,
                 input: state.input.slice(0, -1) 
            }
        default:
            return state
    }
}
export default calculateReducer;