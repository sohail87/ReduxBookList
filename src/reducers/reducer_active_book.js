
//Reducers are only every called when an action occurs

// State argument is not application state,
// only the state this reducer is responsible for
export default function(state = null, action) {
  //state +=1 //willl keep incremeting state by 1, i.e. 0,1,2,3.....
  ////the same state keeps flowing into this reducer over and over again
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  //redux doesnt allow us to return undefined, so we have set it to null by default
  return state;
}

//its really important we dont mutate our current state to produce a new version of the state
//the object returned from our reducer must always be 100% fresh and clean
