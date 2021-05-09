//Here 'which_reducer_and_action' parameter is used to detect which reducer? SET_REDUCER_ONE or SET_REDUCER_TWO and
//which Action? SET or RESET
//In actions we can receive data in any format we want and can we can parse it accordingly, but it should always return plain json object data having {action:"", payload:""}
//again these 'action' and 'payload' key names can be anything, we can change it in reducers defination (reducer1.jsx, reducer2.jsx)



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
