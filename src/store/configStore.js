import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import rootReducer from '../store/reducers/rootReducer';
import thunk from 'redux-thunk';


const NoteReducer = combineReducers(

  {
    root : rootReducer
  }

)


let composeEnhancers = compose;
const configStore =()=>{
 return createStore(NoteReducer, composeEnhancers(applyMiddleware(thunk)));
} ;   

export default configStore;          
