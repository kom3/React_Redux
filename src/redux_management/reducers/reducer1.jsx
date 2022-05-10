export default function myreducerOne(initialSate = {}, action) {
  switch (action.type) {
    case "SET_REDUCER_ONE":
      return {
        name:
          action?.payload.name || action?.payload?.name?.trim() == ""
            ? action?.payload?.name
            : initialSate?.name,
        age:
          action?.payload?.age || action?.payload?.age?.trim() == ""
            ? action?.payload?.age
            : initialSate?.age,
      };
    case "RESET_REDUCER_ONE":
      return null;
    default:
      return initialSate;
    // break;
  }
}
