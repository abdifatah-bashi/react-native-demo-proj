import * as actionsType from '../actions/actionTypes'

const initialState ={
  notes :[]
}

const rootReducer = (state = initialState, action) => {

  console.log(" action type " + action.type);
  switch(action.type){
     
      case actionsType.FETCH_STORE:

        return {
          ...state,
          notes : action.notes
        }
        
      default:
        return state;

      }
    }

export default rootReducer;