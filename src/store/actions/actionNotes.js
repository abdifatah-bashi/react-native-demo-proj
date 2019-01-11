import * as actionType from './actionTypes';

fetchAllNotes = async () => {
 
  const response = await fetch("http://localhost:3000/notes");
  return response.json();
 
}

 const fetchStore =  () => dispatch =>{
   
  fetch("http://localhost:3000/notes")
  .then(res => res.json())
  .then(notes => dispatch (
 {
      type :  "FETCH_STORE",
      notes : notes
    }
  ))
 
  
};

export default fetchStore;
