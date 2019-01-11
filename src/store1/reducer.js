const initialState = {

    notes :[]
}

const reducer = ( state = initialState, action ) => {

    console.log("actionType" + action.type  + "action notes " , action.notes)
    switch (action.type){
        case "SHOWNOTE":
        return {
            ...state,
            notes: action.notes
        }


        default: 
        return{
            ...state
        }
    }
    return state;
};

export default reducer;