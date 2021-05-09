export default function myreducerTwo(initialSate = {}, action) {
    switch (action.type) {
        case "SET_REDUCER_TWO":
            return action.payload
        case "RESET_REDUCER_TWO":
            return null
        default:
            return initialSate
        // break;
    }
}