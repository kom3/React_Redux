const MyActions = (which_reducer_and_action, what_data) => {
    switch (which_reducer_and_action) {
        case "S_REDUCER_1":
            return {
                type: "SET_REDUCER_ONE",
                payload: { age: what_data.age }
            }
        case "RS_REDUCER_1":
            return {
                type: "RESET_REDUCER_ONE",
                payload: null
            }
        case "S_REDUCER_2":
            return {
                type: "SET_REDUCER_TWO",
                payload: { address: what_data}
            }
        case "RS_REDUCER_2":
            return {
                type: "RESET_REDUCER_TWO",
                payload: null
            }

        default:

            break;
    }
}

export default MyActions